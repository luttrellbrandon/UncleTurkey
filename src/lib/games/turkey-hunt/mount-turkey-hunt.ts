import Phaser from 'phaser';
import { HuntScene } from './HuntScene';
import type { HuntHud, TurkeyHuntController } from './types';

/** Phones get a tall 3:4 monitor; wider screens get a 16:10 one. */
export function huntWorldSize(parentWidth: number) {
	return parentWidth < 640 ? { width: 540, height: 720 } : { width: 960, height: 600 };
}

export function mountTurkeyHunt(
	parent: HTMLElement,
	onHud: (hud: HuntHud) => void
): TurkeyHuntController {
	const { width, height } = huntWorldSize(parent.clientWidth);
	const game = new Phaser.Game({
		type: Phaser.AUTO,
		parent,
		width,
		height,
		backgroundColor: '#f7e6bd',
		banner: false,
		audio: { noAudio: true },
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width,
			height
		},
		callbacks: {
			preBoot: (booting) => {
				booting.registry.set('onHud', onHud);
			}
		},
		scene: [HuntScene]
	});

	const scene = () => game.scene.getScene('hunt') as HuntScene;
	// Dev-only handle so play-tests can find birds; stripped from production builds.
	if (import.meta.env.DEV) (window as unknown as { __hunt?: Phaser.Game }).__hunt = game;

	return {
		destroy: () => {
			game.destroy(true);
		},
		retry: () => scene().retry(),
		next: () => scene().next(),
		quit: () => scene().quit(),
		restart: () => scene().restart()
	};
}
