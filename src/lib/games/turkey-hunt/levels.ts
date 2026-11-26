import type { Rivalry, TargetId } from './types';

export const MAX_FLY_OFFS = 3;
export const SHOTS_PER_BIRD = 3;
export const MAX_BIRDS = 3;
/** A miss only burns a Shot when the crosshair is this close to a bird. */
export const NEAR_MISS_RADIUS = 110;
/** Bulk Discount: every this-many positive birds in a row earns the bonus (ADR 0020). */
export const BULK_STREAK = 3;
export const BULK_BONUS = 50;

/** Uncle Turkey Market print palette (DESIGN.md), as Phaser numbers. */
export const INK = {
	ink: 0x161210,
	newsprint: 0xfff4dc,
	fold: 0xf7e6bd,
	crease: 0xead29a,
	red: 0xd8141b,
	recall: 0xb3121b,
	yellow: 0xffd400,
	green: 0x1d7438,
	blue: 0x1b5fa8,
	orange: 0xf08a1c,
	brown: 0x7a3b16,
	tan: 0xc9a46a
} as const;

export type TargetDef = {
	id: TargetId;
	/** Name on the price tag. */
	tag: string;
	points: number;
	body: number;
	fan: [number, number, number];
};

export const TARGETS: Record<TargetId, TargetDef> = {
	daniel: {
		id: 'daniel',
		tag: 'Daniel',
		points: 100,
		body: INK.brown,
		fan: [INK.red, INK.yellow, INK.orange]
	},
	steph: {
		id: 'steph',
		tag: 'Steph',
		points: 200,
		body: 0x9a4a1c,
		fan: [INK.yellow, INK.green, INK.yellow]
	},
	stuffed: {
		id: 'stuffed',
		tag: 'Stuffed',
		points: 200,
		body: INK.tan,
		fan: [INK.crease, INK.tan, INK.crease]
	},
	steve: {
		id: 'steve',
		tag: 'Steve',
		points: 400,
		body: 0x5a2a10,
		fan: [INK.green, INK.yellow, INK.green]
	},
	brandon: {
		id: 'brandon',
		tag: 'Recalled',
		points: -100,
		body: 0x3a2e28,
		fan: [INK.ink, INK.recall, INK.ink]
	}
};

export type LevelDef = {
	rivalry: Rivalry;
	cam: string;
	oneLiner: string;
	quota: number;
	seconds: number;
	birdSpeed: number;
	/** How long a bird stays catchable before it escapes upward. */
	escapeMs: number;
	spawnMs: number;
	weights: Record<TargetId, number>;
};

const easyWeights: Record<TargetId, number> = {
	daniel: 40,
	steph: 22,
	stuffed: 18,
	steve: 12,
	brandon: 8
};

const hardWeights: Record<TargetId, number> = {
	daniel: 22,
	steph: 18,
	stuffed: 16,
	steve: 18,
	brandon: 26
};

export const LEVELS: LevelDef[] = [
	{
		rivalry: 'Ping pong',
		cam: 'Cam 1 · Rec room',
		oneLiner: 'He swears the table was warped.',
		quota: 400,
		seconds: 45,
		birdSpeed: 150,
		escapeMs: 6500,
		spawnMs: 1500,
		weights: easyWeights
	},
	{
		rivalry: 'Ping pong',
		cam: 'Cam 1 · Rec room',
		oneLiner: 'Game two. He is still arguing game one.',
		quota: 700,
		seconds: 42,
		birdSpeed: 190,
		escapeMs: 5600,
		spawnMs: 1200,
		weights: hardWeights
	},
	{
		rivalry: 'Fishing',
		cam: 'Cam 2 · The dock',
		oneLiner: 'Six hours on the water. Zero fish. One sunburn.',
		quota: 800,
		seconds: 40,
		birdSpeed: 180,
		escapeMs: 6000,
		spawnMs: 1300,
		weights: easyWeights
	},
	{
		rivalry: 'Fishing',
		cam: 'Cam 2 · The dock',
		oneLiner: 'Catch and release. Mostly release. Of the rod.',
		quota: 1200,
		seconds: 38,
		birdSpeed: 220,
		escapeMs: 5200,
		spawnMs: 1050,
		weights: hardWeights
	},
	{
		rivalry: 'Racquetball',
		cam: 'Cam 3 · Court 4',
		oneLiner: 'Four walls, and the ball still found his face.',
		quota: 1400,
		seconds: 36,
		birdSpeed: 210,
		escapeMs: 5400,
		spawnMs: 1100,
		weights: easyWeights
	},
	{
		rivalry: 'Racquetball',
		cam: 'Cam 3 · Court 4',
		oneLiner: 'Match point. Do not shoot Brandon.',
		quota: 2000,
		seconds: 34,
		birdSpeed: 260,
		escapeMs: 4600,
		spawnMs: 900,
		weights: hardWeights
	}
];

export function pickTarget(weights: Record<TargetId, number>, roll = Math.random()): TargetId {
	const entries = Object.entries(weights) as [TargetId, number][];
	const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
	let cursor = roll * total;
	for (const [id, weight] of entries) {
		cursor -= weight;
		if (cursor <= 0) return id;
	}
	return entries[entries.length - 1][0];
}
