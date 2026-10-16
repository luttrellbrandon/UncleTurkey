/**
 * Origin Story content modules.
 * Edit copy here; the /origin route renders it.
 */

export type OriginChapter = {
	id: string;
	title: string;
	body: string;
};

export const originIntro =
	'Once upon a crisp autumn afternoon, the kids needed a name for a very special uncle…';

export const originChapters: OriginChapter[] = [
	{
		id: 'the-naming',
		title: 'The Naming',
		body: 'Placeholder chapter — replace with the real Origin Story.'
	},
	{
		id: 'the-feathering',
		title: 'The Feathering',
		body: 'Placeholder chapter — legends of gobbles and gravy to follow.'
	}
];
