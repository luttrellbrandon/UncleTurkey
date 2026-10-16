/**
 * Games Hub catalog — ids must match `src/lib/games/<id>/` and `/games/<id>` routes.
 */

export type GameListing = {
	id: string;
	title: string;
	blurb: string;
	href: string;
};

export const games: GameListing[] = [
	{
		id: 'turkey-hunt',
		title: 'Turkey Hunt',
		blurb: 'A Duck Hunt–style gag shooter. Phaser stub lives under #lib/games/turkey-hunt.',
		href: '/games/turkey-hunt'
	}
];
