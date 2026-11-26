import Phaser from 'phaser';
import {
	BULK_BONUS,
	BULK_STREAK,
	INK,
	LEVELS,
	MAX_BIRDS,
	MAX_FLY_OFFS,
	NEAR_MISS_RADIUS,
	SHOTS_PER_BIRD,
	TARGETS,
	pickTarget
} from './levels';
import {
	BULK_CAPTION,
	CAPTIONS,
	DANIEL_CAPTIONS,
	LEVEL_INTRO,
	ON_BRANDON_HIT,
	ON_BULK,
	ON_CLEAR,
	ON_DANIEL_HIT,
	ON_FAIL,
	ON_FLY_OFF,
	ON_MISS,
	ON_QUIT,
	ON_WIN,
	pick
} from './roast';
import type { FaceId } from '#lib/assets/characters/faces';
import type { FailReason, HuntHud, HuntStatus, Speaker, TargetId, Taunt } from './types';

const DISPLAY = '"Big Shoulders Display", "Arial Narrow", sans-serif';
const BODY = '"Archivo Narrow", "Arial Narrow", sans-serif';
const hex = (n: number) => `#${n.toString(16).padStart(6, '0')}`;

type Bird = {
	id: TargetId;
	points: number;
	vx: number;
	vy: number;
	speed: number;
	age: number;
	turnIn: number;
	shots: number;
	radius: number;
	state: 'fly' | 'hit' | 'flee';
	frozen: number;
	/** Half the tag's width plus air: how close to a wall this bird may fly. */
	margin: number;
	container: Phaser.GameObjects.Container;
	art: Phaser.GameObjects.Container;
	wing: Phaser.GameObjects.Graphics;
	tag: Phaser.GameObjects.Graphics;
	tagText: Phaser.GameObjects.Text;
};

export class HuntScene extends Phaser.Scene {
	private onHud: ((hud: HuntHud) => void) | null = null;
	private W = 960;
	private H = 600;
	private levelIndex = 0;
	private banked = 0;
	private levelScore = 0;
	private timeLeft = 0;
	private flyOffs = 0;
	private streak = 0;
	private status: HuntStatus = 'playing';
	private failReason: FailReason = null;
	private birds: Bird[] = [];
	private spawnEvent: Phaser.Time.TimerEvent | null = null;
	private crosshair: Phaser.GameObjects.Container | null = null;
	private taunt: Taunt | null = null;
	private tauntSeq = 0;
	private lastTauntAt = -10_000;
	private lastEmitKey = '';
	private reducedMotion = false;
	/** World units per on-screen pixel, so tags stay readable when phones shrink the field. */
	private ui = 1;
	private lastHitLineAt = -10_000;

	constructor() {
		super('hunt');
	}

	create() {
		this.W = this.scale.width;
		this.H = this.scale.height;
		this.onHud = this.registry.get('onHud') as (hud: HuntHud) => void;
		// Illustrated faces (ADR 0013) arrive pre-decoded from the mount; the stuffed decoy has none.
		const faces = (this.registry.get('faces') ?? {}) as Partial<Record<FaceId, HTMLImageElement>>;
		for (const [id, img] of Object.entries(faces)) {
			if (img && !this.textures.exists(`face-${id}`)) this.textures.addImage(`face-${id}`, img);
		}
		this.reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
		const shown = this.scale.displaySize.width || this.W;
		this.ui = Math.max(1, this.W / shown);
		this.input.mouse?.disableContextMenu();
		this.input.setDefaultCursor('none');
		this.begin(0, 0);
		this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
			this.crosshair?.setPosition(pointer.worldX, pointer.worldY).setVisible(true);
			this.shoot(pointer);
		});
		this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
			this.crosshair?.setPosition(pointer.worldX, pointer.worldY);
		});
	}

	retry() {
		if (this.status !== 'failed') return;
		this.begin(this.levelIndex, this.banked);
	}

	next() {
		if (this.status !== 'cleared') return;
		this.begin(this.levelIndex + 1, this.banked + this.levelScore);
	}

	quit() {
		if (this.status === 'won' || this.status === 'quit') return;
		this.finish('quit', null);
	}

	restart() {
		this.begin(0, 0);
	}

	update(_time: number, delta: number) {
		const step = delta / 1000;
		const level = LEVELS[this.levelIndex];
		if (this.status === 'playing') {
			this.timeLeft -= step;
			if (this.timeLeft <= 0) {
				this.timeLeft = 0;
				this.finish('failed', 'time');
			}
		}

		const floor = this.H * 0.7;
		for (const bird of [...this.birds]) {
			const c = bird.container;
			if (bird.state === 'fly') {
				bird.age += delta;
				bird.turnIn -= delta;
				if (bird.turnIn <= 0 && bird.age > 700) {
					// Zigzag: pick a new heading, always with some climb or dive.
					const angle = Phaser.Math.FloatBetween(-Math.PI * 0.85, -Math.PI * 0.15);
					const dir = Math.random() < 0.5 ? -1 : 1;
					bird.vx = Math.cos(angle) * bird.speed * dir;
					bird.vy = Math.sin(angle) * bird.speed * (Math.random() < 0.35 ? -1 : 1);
					bird.turnIn = Phaser.Math.Between(700, 1500);
				}
				c.x += bird.vx * step;
				c.y += bird.vy * step;
				if (c.x < bird.margin && bird.vx < 0) bird.vx *= -1;
				if (c.x > this.W - bird.margin && bird.vx > 0) bird.vx *= -1;
				c.x = Phaser.Math.Clamp(c.x, bird.margin, this.W - bird.margin);
				if (c.y < 60 && bird.vy < 0) bird.vy *= -1;
				if (c.y > floor && bird.vy > 0 && bird.age > 900) bird.vy *= -1;
				bird.art.scaleX = bird.vx < 0 ? -1 : 1;
				bird.wing.scaleY = 0.55 + Math.abs(Math.sin(bird.age / 70)) * 0.6;
				if (bird.age > level.escapeMs) this.flyOff(bird);
			} else if (bird.state === 'hit') {
				if (bird.frozen > 0) {
					bird.frozen -= delta;
				} else {
					c.y += 520 * step;
					c.rotation += step * 5;
					if (c.y > this.H + 80) this.removeBird(bird);
				}
			} else {
				bird.age += delta;
				bird.wing.scaleY = 0.4 + Math.abs(Math.sin(bird.age / 45)) * 0.8;
				c.x += bird.vx * 0.4 * step;
				c.y -= bird.speed * 1.8 * step;
				if (c.y < -90) this.removeBird(bird);
			}
		}

		this.emit();
	}

	private begin(levelIndex: number, banked: number) {
		this.levelIndex = levelIndex;
		this.banked = banked;
		this.levelScore = 0;
		this.flyOffs = 0;
		this.streak = 0;
		this.failReason = null;
		this.status = 'playing';
		this.lastEmitKey = '';
		this.timeLeft = LEVELS[levelIndex].seconds;
		this.spawnEvent?.remove(false);
		this.drawField();
		const intro = LEVEL_INTRO[LEVELS[levelIndex].rivalry];
		this.say(intro[0].speaker, intro[0].line, true);
		this.time.delayedCall(3200, () => {
			if (this.status === 'playing' && this.levelIndex === levelIndex) this.say(intro[1].speaker, intro[1].line, true);
		});
		this.spawnEvent = this.time.addEvent({
			delay: LEVELS[levelIndex].spawnMs,
			loop: true,
			callback: () => this.trySpawn()
		});
		this.time.delayedCall(500, () => this.trySpawn());
		this.emit();
	}

	// ── Scenery: flat circular print, one room per Rivalry ─────────────────

	private drawField() {
		this.children.removeAll(true);
		this.birds = [];
		const { W, H } = this;
		const rivalry = LEVELS[this.levelIndex].rivalry;
		const g = this.add.graphics();

		if (rivalry === 'Ping pong') {
			// Rec room: paneled wall, a banner, a ping pong table in the foreground.
			g.fillStyle(INK.fold).fillRect(0, 0, W, H);
			g.lineStyle(2, INK.crease, 1);
			for (let x = 0; x < W; x += 48) g.lineBetween(x, 0, x, H * 0.66);
			g.fillStyle(INK.crease).fillRect(0, H * 0.66, W, H * 0.34);
			g.lineStyle(3, INK.ink, 1).lineBetween(0, H * 0.66, W, H * 0.66);
			this.pennant(W * 0.74, H * 0.6, 'Uncle Turkey · 0 wins', INK.red);
		} else if (rivalry === 'Fishing') {
			// The dock: sky, far shore, lake.
			g.fillStyle(INK.newsprint).fillRect(0, 0, W, H);
			g.fillStyle(INK.yellow).fillCircle(W * 0.82, H * 0.14, Math.min(W, H) * 0.07);
			g.lineStyle(3, INK.ink, 1).strokeCircle(W * 0.82, H * 0.14, Math.min(W, H) * 0.07);
			g.fillStyle(INK.green).fillRect(0, H * 0.56, W, H * 0.06);
			g.fillStyle(INK.blue).fillRect(0, H * 0.62, W, H * 0.38);
			g.lineStyle(3, INK.ink, 1).lineBetween(0, H * 0.56, W, H * 0.56).lineBetween(0, H * 0.62, W, H * 0.62);
			g.lineStyle(3, INK.newsprint, 0.55);
			for (let i = 0; i < 9; i++) {
				const y = H * (0.68 + (i % 4) * 0.07);
				const x = ((i * 173) % W) - 20;
				g.lineBetween(x, y, x + 70, y);
			}
		} else {
			// Court 4: back wall with red service lines, wood floor.
			g.fillStyle(INK.newsprint).fillRect(0, 0, W, H);
			g.fillStyle(INK.crease).fillRect(0, H * 0.7, W, H * 0.3);
			g.lineStyle(2, INK.tan, 1);
			for (let x = -H; x < W; x += 56) g.lineBetween(x, H, x + H * 0.3, H * 0.7);
			g.lineStyle(6, INK.red, 1).lineBetween(0, H * 0.42, W, H * 0.42);
			g.lineStyle(3, INK.red, 1).lineBetween(0, H * 0.55, W, H * 0.55);
			g.lineStyle(3, INK.ink, 1).lineBetween(0, H * 0.7, W, H * 0.7);
			this.pennant(W * 0.5, H * 0.63, 'Wall: undefeated', INK.green);
		}

		this.drawForeground(rivalry);

		const sight = this.add.graphics();
		sight.lineStyle(7, INK.newsprint, 0.9).strokeCircle(0, 0, 22);
		sight.lineStyle(4, INK.red, 1).strokeCircle(0, 0, 22);
		sight.lineStyle(4, INK.red, 1);
		sight.lineBetween(-36, 0, -10, 0).lineBetween(10, 0, 36, 0).lineBetween(0, -36, 0, -10).lineBetween(0, 10, 0, 36);
		sight.fillStyle(INK.red).fillCircle(0, 0, 3);
		this.crosshair = this.add.container(W / 2, H * 0.45, [sight]).setDepth(1000);
		// Touch has no hover aim, so the reticle appears where you tap.
		const finePointer = window.matchMedia?.('(pointer: fine)').matches ?? true;
		this.crosshair.setVisible(finePointer);
	}

	/** The thing birds rise from behind: a table, a dock, a bench. */
	private drawForeground(rivalry: string) {
		const { W, H } = this;
		const fg = this.add.graphics().setDepth(50);
		if (rivalry === 'Ping pong') {
			const top = H * 0.78;
			fg.fillStyle(INK.green).fillRect(W * 0.04, top, W * 0.92, H * 0.1);
			fg.lineStyle(4, INK.ink, 1).strokeRect(W * 0.04, top, W * 0.92, H * 0.1);
			fg.lineStyle(3, INK.newsprint, 1).lineBetween(W * 0.07, top + H * 0.05, W * 0.93, top + H * 0.05);
			fg.fillStyle(INK.newsprint, 0.85).fillRect(W * 0.495, top - H * 0.07, 6, H * 0.07);
			fg.lineStyle(3, INK.ink, 1).strokeRect(W * 0.49, top - H * 0.07, W * 0.02, H * 0.07);
			fg.fillStyle(INK.ink).fillRect(W * 0.44, top + H * 0.1, 10, H * 0.12).fillRect(W * 0.55, top + H * 0.1, 10, H * 0.12);
			// A paddle, abandoned on the table mid-tantrum.
			const px = W * 0.3;
			const py = top + H * 0.025;
			fg.fillStyle(INK.tan).fillRect(px + H * 0.022, py - 4, H * 0.045, 8);
			fg.lineStyle(2, INK.ink, 1).strokeRect(px + H * 0.022, py - 4, H * 0.045, 8);
			fg.fillStyle(INK.red).fillEllipse(px, py, H * 0.055, H * 0.035);
			fg.lineStyle(3, INK.ink, 1).strokeEllipse(px, py, H * 0.055, H * 0.035);
		} else if (rivalry === 'Fishing') {
			const top = H * 0.8;
			fg.fillStyle(INK.tan).fillRect(0, top, W * 0.62, H * 0.06);
			fg.lineStyle(3, INK.ink, 1).strokeRect(-4, top, W * 0.62 + 4, H * 0.06);
			for (let x = W * 0.06; x < W * 0.6; x += W * 0.14) {
				fg.fillStyle(INK.brown).fillRect(x, top + H * 0.06, 12, H * 0.16);
				fg.strokeRect(x, top + H * 0.06, 12, H * 0.16);
			}
			// The rod, bent toward absolutely nothing.
			fg.lineStyle(5, INK.ink, 1).lineBetween(W * 0.5, top, W * 0.72, top - H * 0.22);
			fg.lineStyle(2, INK.ink, 1).lineBetween(W * 0.72, top - H * 0.22, W * 0.78, H * 0.75);
			fg.fillStyle(INK.red).fillCircle(W * 0.78, H * 0.75, 6);
			fg.fillStyle(INK.green).fillRect(0, H * 0.95, W, H * 0.05);
		} else {
			// The service box edge, one abandoned racquet, one ball that hit him.
			const top = H * 0.86;
			fg.fillStyle(INK.crease).fillRect(0, top, W, H * 0.14);
			fg.lineStyle(4, INK.ink, 1).lineBetween(0, top, W, top);
			fg.lineStyle(5, INK.red, 1).lineBetween(W * 0.08, top + H * 0.05, W * 0.92, top + H * 0.05);
			// Racquet leaning on the wall, centered between the HUD corners.
			const rx = W * 0.5;
			const ry = top - H * 0.05;
			fg.lineStyle(7, INK.ink, 1).lineBetween(rx + 6, ry + H * 0.03, rx + 14, top);
			fg.fillStyle(INK.yellow).fillEllipse(rx, ry, H * 0.05, H * 0.07);
			fg.lineStyle(3, INK.ink, 1).strokeEllipse(rx, ry, H * 0.05, H * 0.07);
			fg.fillStyle(INK.blue).fillCircle(rx - H * 0.05, top - 10, 9);
			fg.lineStyle(2, INK.ink, 1).strokeCircle(rx - H * 0.05, top - 10, 9);
		}
	}

	private pennant(x: number, y: number, text: string, color: number) {
		const label = this.add
			.text(x, y, text.toUpperCase(), { fontFamily: DISPLAY, fontSize: `${Math.round(this.H * 0.045)}px`, fontStyle: '900', color: hex(INK.newsprint) })
			.setOrigin(0.5)
			.setDepth(2);
		const pad = 12;
		x = Phaser.Math.Clamp(x, label.width / 2 + pad + 10, this.W - label.width / 2 - pad - 10);
		label.setX(x);
		const bg = this.add.graphics().setDepth(1);
		bg.fillStyle(color).fillRect(x - label.width / 2 - pad, y - label.height / 2 - 4, label.width + pad * 2, label.height + 8);
		bg.lineStyle(3, INK.ink, 1).strokeRect(x - label.width / 2 - pad, y - label.height / 2 - 4, label.width + pad * 2, label.height + 8);
	}

	// ── Birds ──────────────────────────────────────────────────────────────

	private trySpawn() {
		if (this.status !== 'playing') return;
		const flying = this.birds.filter((bird) => bird.state === 'fly').length;
		if (flying >= MAX_BIRDS) return;
		const level = LEVELS[this.levelIndex];
		const id = pickTarget(level.weights);
		const def = TARGETS[id];
		const speed = level.birdSpeed * (0.9 + Math.random() * 0.25) * (this.W < 700 ? 0.8 : 1);

		const art = this.add.container(0, 0);
		const fan = this.add.graphics();
		const feathers = [-60, -30, 0, 30, 60];
		feathers.forEach((deg, i) => {
			const a = Phaser.Math.DegToRad(deg - 90 - 25);
			const len = 44;
			const fx = Math.cos(a) * len * 0.5 - 14;
			const fy = Math.sin(a) * len * 0.5;
			fan.fillStyle(def.fan[i % 3]).fillEllipse(fx, fy, 22, len);
			fan.lineStyle(3, INK.ink, 1).strokeEllipse(fx, fy, 22, len);
		});
		const body = this.add.graphics();
		body.fillStyle(def.body).fillEllipse(0, 4, 62, 46);
		body.lineStyle(3, INK.ink, 1).strokeEllipse(0, 4, 62, 46);
		if (id === 'stuffed') {
			body.lineStyle(2, INK.ink, 1);
			for (let x = -18; x <= 18; x += 9) body.lineBetween(x, 22, x + 4, 26);
		}
		const wing = this.add.graphics();
		wing.fillStyle(def.fan[1]).fillEllipse(0, -10, 34, 26);
		wing.lineStyle(3, INK.ink, 1).strokeEllipse(0, -10, 34, 26);
		wing.setPosition(-4, 6);
		const head = this.add.graphics();
		const faceId: FaceId | null = id === 'stuffed' ? null : (id as FaceId);
		// Bare turkey head on a neck: eye, beak, a snood over the beak, a wattle under it.
		const skin = id === 'stuffed' ? INK.tan : 0xe8574a;
		head.fillStyle(skin).fillRoundedRect(16, -22, 12, 26, 5);
		if (!faceId) {
			head.fillStyle(skin).fillEllipse(30, -24, 26, 22);
			head.lineStyle(3, INK.ink, 1).strokeEllipse(30, -24, 26, 22);
			head.fillStyle(INK.newsprint).fillCircle(32, -27, 5);
			head.fillStyle(INK.ink).fillCircle(33.5, -27, 2.5);
			head.fillStyle(INK.yellow).fillTriangle(41, -27, 53, -22, 41, -18);
			head.lineStyle(2, INK.ink, 1).strokeTriangle(41, -27, 53, -22, 41, -18);
			head.fillStyle(INK.red).fillEllipse(44, -14, 7, 16);
			head.lineStyle(2, INK.ink, 1).strokeEllipse(44, -14, 7, 16);
		}
		head.lineStyle(4, INK.ink, 1).lineBetween(-8, 26, -12, 40).lineBetween(8, 26, 10, 40);
		const parts: Phaser.GameObjects.GameObject[] = [fan, body, wing, head];
		if (faceId && this.textures.exists(`face-${faceId}`)) {
			// The cast member's illustrated turkey head (ADR 0013).
			parts.push(this.add.image(35, -31, `face-${faceId}`).setDisplaySize(78, 78));
		} else {
			const wattle = this.add.graphics();
			wattle.fillStyle(INK.recall).fillEllipse(35, -11, 10, 14);
			wattle.lineStyle(2, INK.ink, 1).strokeEllipse(35, -11, 10, 14);
			parts.push(wattle);
		}
		art.add(parts);

		const tag = this.add.graphics();
		const tagText = this.add
			.text(-2, 0, `${def.tag.toUpperCase()} ${def.points > 0 ? '' : '−'}${Math.abs(def.points)}`, {
				fontFamily: DISPLAY,
				fontStyle: '900',
				fontSize: `${Math.max(17, Math.round(15 * this.ui))}px`,
				color: hex(def.points < 0 ? INK.yellow : INK.ink)
			})
			.setOrigin(0.5);

		// Spawn clear of birds that are still rising, so tags never stack.
		let x = Phaser.Math.Between(100, this.W - 100);
		for (let tries = 0; tries < 10; tries++) {
			const crowded = this.birds.some((b) => b.state === 'fly' && b.age < 1800 && Math.abs(b.container.x - x) < 150);
			if (!crowded) break;
			x = Phaser.Math.Between(100, this.W - 100);
		}
		const container = this.add.container(x, this.H * 0.86, [art, tag, tagText]);
		container.setDepth(10);
		const dir = Math.random() < 0.5 ? -1 : 1;
		const bird: Bird = {
			id,
			points: def.points,
			vx: dir * speed * 0.45,
			vy: -speed * 0.9,
			speed,
			age: 0,
			turnIn: 900,
			shots: SHOTS_PER_BIRD,
			radius: 48,
			state: 'fly',
			frozen: 0,
			margin: 50,
			container,
			art,
			wing,
			tag,
			tagText
		};
		this.paintTag(bird);
		this.birds.push(bird);
	}

	/** Yellow price tag on a string, with the bird's remaining Shots as punch holes. */
	private paintTag(bird: Bird) {
		const def = TARGETS[bird.id];
		const text = bird.tagText;
		const w = text.width + 14 * this.ui;
		bird.margin = Math.max(50, w / 2 + 10);
		const h = text.height + 4 * this.ui;
		const bottom = -66;
		const top = bottom - h;
		text.setPosition(-2, top + h / 2);
		const r = Math.max(4, 4.5 * this.ui);
		const g = bird.tag;
		g.clear();
		g.lineStyle(2, INK.ink, 1).lineBetween(-2, bottom, 10, bottom + 6);
		g.fillStyle(def.points < 0 ? INK.ink : INK.yellow).fillRect(-2 - w / 2, top, w, h);
		g.lineStyle(2.5, def.points < 0 ? INK.yellow : INK.ink, 1).strokeRect(-2 - w / 2, top, w, h);
		for (let i = 0; i < SHOTS_PER_BIRD; i++) {
			const live = i < bird.shots;
			const cx = -2 + (i - 1) * r * 2.6;
			g.fillStyle(live ? INK.red : INK.newsprint, 1).fillCircle(cx, top - r - 3, r);
			g.lineStyle(2, INK.ink, 1).strokeCircle(cx, top - r - 3, r);
		}
	}

	private shoot(pointer: Phaser.Input.Pointer) {
		if (this.status !== 'playing') return;
		this.markShot(pointer.worldX, pointer.worldY);
		let closest: Bird | null = null;
		let closestDist = Infinity;
		for (const bird of this.birds) {
			if (bird.state !== 'fly') continue;
			const dist = Phaser.Math.Distance.Between(pointer.worldX, pointer.worldY, bird.container.x, bird.container.y - 6);
			if (dist < closestDist) {
				closest = bird;
				closestDist = dist;
			}
		}
		if (!closest) return;
		if (closestDist <= closest.radius) {
			this.bag(closest);
			return;
		}
		if (closestDist <= NEAR_MISS_RADIUS) {
			closest.shots -= 1;
			this.streak = 0;
			this.paintTag(closest);
			if (closest.shots <= 0) this.flyOff(closest);
			else if (this.time.now - this.lastTauntAt > 2600) {
				const line = pick(ON_MISS[LEVELS[this.levelIndex].rivalry]);
				this.say(line.speaker, line.line);
			}
		}
	}

	private bag(bird: Bird) {
		bird.state = 'hit';
		bird.frozen = 260;
		this.levelScore += bird.points;
		const rivalry = LEVELS[this.levelIndex].rivalry;
		const caption = bird.id === 'daniel' ? pick(DANIEL_CAPTIONS[rivalry]) : pick(CAPTIONS[bird.id]);
		this.caption(bird.container.x, bird.container.y - 70, caption, bird.points < 0);
		this.popPoints(bird.container.x, bird.container.y, bird.points);
		this.tweens.add({ targets: bird.art, alpha: 0.35, yoyo: true, duration: 70, repeat: 1 });

		if (bird.points < 0) {
			this.streak = 0;
			const line = pick(ON_BRANDON_HIT);
			this.say(line.speaker, line.line, true);
		} else {
			this.streak += 1;
			if (this.streak % BULK_STREAK === 0) {
				this.levelScore += BULK_BONUS;
				this.time.delayedCall(420, () => this.caption(this.W / 2, this.H * 0.3, BULK_CAPTION, false, true));
				const line = pick(ON_BULK);
				this.say(line.speaker, line.line, true);
			} else if (bird.id === 'daniel' && this.time.now - this.lastHitLineAt > 2200) {
				// Daniel's excuse is the payoff: it preempts intro and miss lines.
				this.lastHitLineAt = this.time.now;
				const line = pick(ON_DANIEL_HIT);
				this.say(line.speaker, line.line, true);
			}
		}
		if (this.levelScore >= LEVELS[this.levelIndex].quota) this.finish('cleared', null);
	}

	private flyOff(bird: Bird) {
		if (bird.state !== 'fly') return;
		bird.state = 'flee';
		if (this.status !== 'playing') return;
		this.flyOffs += 1;
		this.streak = 0;
		if (this.flyOffs >= MAX_FLY_OFFS) {
			this.finish('failed', 'flyoff');
			return;
		}
		const line = pick(ON_FLY_OFF);
		this.say(line.speaker, line.line, true);
	}

	private finish(status: 'cleared' | 'failed' | 'quit', failReason: FailReason) {
		if (this.status !== 'playing' && status !== 'quit') return;
		if (status === 'quit' && (this.status === 'won' || this.status === 'quit')) return;
		this.spawnEvent?.remove(false);
		this.spawnEvent = null;
		if (status === 'failed') this.levelScore = 0;
		const lastLevel = this.levelIndex === LEVELS.length - 1;
		this.status = status === 'cleared' && lastLevel ? 'won' : status;
		this.failReason = failReason;
		for (const bird of this.birds) if (bird.state === 'fly') bird.state = 'flee';
		if (this.status === 'won') this.say(ON_WIN.speaker, ON_WIN.line, true);
		else if (status === 'quit') this.say(ON_QUIT.speaker, ON_QUIT.line, true);
		else if (status === 'cleared') {
			const line = pick(ON_CLEAR);
			this.say(line.speaker, line.line, true);
		} else if (status === 'failed' && failReason) {
			const line = pick(ON_FAIL[failReason]);
			this.say(line.speaker, line.line, true);
		}
		this.emit();
	}

	// ── Feedback ───────────────────────────────────────────────────────────

	private caption(x: number, y: number, text: string, bad: boolean, big = false) {
		const size = Math.round(Math.min(this.W, this.H) * (big ? 0.085 : 0.07));
		const label = this.add
			.text(0, 0, text.toUpperCase(), {
				fontFamily: DISPLAY,
				fontStyle: '900',
				fontSize: `${size}px`,
				color: hex(bad ? INK.newsprint : INK.yellow),
				stroke: hex(bad ? INK.recall : INK.ink),
				strokeThickness: Math.round(size * 0.22),
				align: 'center',
				wordWrap: { width: this.W * 0.7 }
			})
			.setOrigin(0.5)
			.setDepth(900);
		const half = label.width / 2 + 8;
		label.setPosition(Phaser.Math.Clamp(x, half, this.W - half), Phaser.Math.Clamp(y, label.height / 2 + this.H * 0.11, this.H * 0.48));
		label.setAngle(Phaser.Math.Between(-6, 4));
		if (this.reducedMotion) {
			this.time.delayedCall(1100, () => label.destroy());
			return;
		}
		label.setScale(1.6);
		this.tweens.add({ targets: label, scale: 1, duration: 220, ease: 'Expo.easeOut' });
		this.tweens.add({ targets: label, alpha: 0, y: label.y - 18, delay: 950, duration: 300, onComplete: () => label.destroy() });
	}

	private popPoints(x: number, y: number, points: number) {
		const label = this.add
			.text(x, y - 20, `${points > 0 ? '+' : '−'}${Math.abs(points)}`, {
				fontFamily: DISPLAY,
				fontStyle: '900',
				fontSize: '30px',
				color: hex(points < 0 ? INK.recall : INK.ink),
				stroke: hex(INK.newsprint),
				strokeThickness: 6
			})
			.setOrigin(0.5)
			.setDepth(901);
		if (this.reducedMotion) {
			this.time.delayedCall(700, () => label.destroy());
			return;
		}
		this.tweens.add({ targets: label, y: label.y - 40, alpha: 0, duration: 700, onComplete: () => label.destroy() });
	}

	private markShot(x: number, y: number) {
		const ring = this.add.circle(x, y, 8).setStrokeStyle(4, INK.ink).setDepth(950);
		if (this.reducedMotion) {
			this.time.delayedCall(200, () => ring.destroy());
			return;
		}
		this.tweens.add({ targets: ring, scale: 2.6, alpha: 0, duration: 200, onComplete: () => ring.destroy() });
	}

	private say(speaker: Speaker, line: string, force = false) {
		if (!force && this.time.now - this.lastTauntAt < 2600) return;
		this.lastTauntAt = this.time.now;
		this.tauntSeq += 1;
		this.taunt = { id: this.tauntSeq, speaker, line };
	}

	private removeBird(bird: Bird) {
		bird.container.destroy();
		this.birds = this.birds.filter((item) => item !== bird);
	}

	private emit() {
		if (!this.onHud) return;
		const level = LEVELS[this.levelIndex];
		const done = this.status === 'won' || this.status === 'quit';
		const emitKey = [
			this.levelIndex,
			this.levelScore,
			this.banked,
			Math.max(0, Math.ceil(this.timeLeft)),
			this.flyOffs,
			this.streak,
			this.status,
			this.failReason,
			this.taunt?.id ?? 0
		].join('|');
		if (emitKey === this.lastEmitKey) return;
		this.lastEmitKey = emitKey;
		this.onHud({
			levelIndex: this.levelIndex,
			levelCount: LEVELS.length,
			rivalry: level.rivalry,
			cam: level.cam,
			oneLiner: level.oneLiner,
			levelScore: this.levelScore,
			banked: this.banked,
			quota: level.quota,
			timeLeft: Math.max(0, Math.ceil(this.timeLeft)),
			flyOffs: this.flyOffs,
			maxFlyOffs: MAX_FLY_OFFS,
			streak: this.streak,
			status: this.status,
			failReason: this.failReason,
			taunt: this.taunt,
			submitScore: done ? this.banked + this.levelScore : null
		});
	}
}
