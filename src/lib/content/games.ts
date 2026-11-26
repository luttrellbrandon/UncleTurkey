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
		blurb: 'Click the flying turkeys. Daniel, Steph, Steve, a stuffed decoy, and Brandon.',
		href: '/games/turkey-hunt'
	}
];
