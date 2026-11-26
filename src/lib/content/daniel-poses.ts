/**
 * Daniel Turkey's doorbuster "store photos". One rotates in per visit (see src/routes/+page.server.ts).
 * Cropped from the user-supplied Daniel Turkey sheet (ADR 0022). Captions are fine-print roasts.
 */
import pilgrim from '#lib/assets/characters/uncle-turkey/poses/pilgrim.webp';
import runner from '#lib/assets/characters/uncle-turkey/poses/runner.webp';
import beach from '#lib/assets/characters/uncle-turkey/poses/beach.webp';
import camo from '#lib/assets/characters/uncle-turkey/poses/camo.webp';
import roast from '#lib/assets/characters/uncle-turkey/poses/roast.webp';
import superTurkey from '#lib/assets/characters/uncle-turkey/poses/super.webp';

export type DanielPose = {
	id: string;
	src: string;
	alt: string;
	caption: string;
};

export const danielPoses: DanielPose[] = [
	{
		id: 'pilgrim',
		src: pilgrim,
		alt: 'Daniel Turkey in a pilgrim hat, holding a mug of beer and giving a thumbs up',
		caption: 'Pilgrim edition. Beverage included. Manners not.'
	},
	{
		id: 'runner',
		src: runner,
		alt: 'Daniel Turkey sprinting in a red headband and running shoes',
		caption: 'Fleeing a ping pong rematch. Again.'
	},
	{
		id: 'beach',
		src: beach,
		alt: 'Daniel Turkey in sunglasses and a Hawaiian shirt, lounging on a beach chair with a cocktail',
		caption: 'Florida Turkey, back on "vacation."'
	},
	{
		id: 'camo',
		src: camo,
		alt: 'Daniel Turkey in camouflage, hiding in tall grass',
		caption: 'Camo edition. Still has not caught a fish.'
	},
	{
		id: 'roast',
		src: roast,
		alt: 'Daniel Turkey as a golden roast turkey on a platter, head poking out the top',
		caption: 'Fully basted. Ready for the roast.'
	},
	{
		id: 'super',
		src: superTurkey,
		alt: 'Daniel Turkey as a superhero with a red cape and a T on his chest',
		caption: 'Super Turkey. Weakness: the racquetball wall.'
	}
];

export const POSE_COOKIE = 'ut_pose';
