/**
 * Curated Turkey Links (costumes, stores, gag merch).
 * Edit here; the /links route renders the list.
 */

export type TurkeyLink = {
	id: string;
	title: string;
	href: string;
	blurb: string;
};

export const turkeyLinks: TurkeyLink[] = [
	{
		id: 'example-costume',
		title: 'Example Turkey Costume',
		href: 'https://www.amazon.com',
		blurb: 'Placeholder Turkey Link — swap for a real costume or store URL.'
	},
	{
		id: 'example-store',
		title: 'Example Turkey Store',
		href: 'https://example.com',
		blurb: 'Placeholder Turkey Link — swap for a real shop.'
	}
];
