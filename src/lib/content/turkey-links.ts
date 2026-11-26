/**
 * Turkey Links: the Seasonal Aisle gag catalog plus a few real outbound links.
 * The products are fake. "Add to cart" prints a rain check and goes nowhere.
 * Edit here; the /links route renders it. `cut` picks the drawing in ProductCut.svelte.
 */

export type ProductCut =
	| 'kit'
	| 'pingpong-book'
	| 'lure'
	| 'code-book'
	| 'racquet-vhs'
	| 'trophy'
	| 'excuse-dial'
	| 'wattle'
	| 'headphones'
	| 'decoy';

export type GagProduct = {
	id: string;
	cut: ProductCut;
	name: string;
	/** Price as printed, e.g. ['12', '99']. */
	price: [string, string];
	unit?: string;
	tag?: string;
	/** The roast: body-size fine print. */
	line: string;
	/** Why it's out of stock, printed on the rain check. */
	rainCheck: string;
	recalled?: boolean;
};

export const doorbuster = {
	shout: 'Doorbuster!',
	title: ['Stop', 'Losing', 'Kit'],
	price: { whole: '19', cents: '99', unit: 'per grudge' },
	wasPrice: ['Reg. one win', '(never seen)'],
	contents: 'Includes a ping pong paddle, a lure, a racquetball and a laminated card that says “Good game.”',
	finePrint:
		'Results not typical. Results not observed. Kit has been opened, used and returned eleven times. Kit is undefeated. Owner is not.',
	rainCheck: 'Uncle Turkey bought every kit in the region. He lost to all of them.'
};

export const products: GagProduct[] = [
	{
		id: 'pingpong-book',
		cut: 'pingpong-book',
		name: 'Ping Pong for the Average Turkey',
		price: ['12', '99'],
		unit: 'paperback',
		tag: 'Aisle 1 · Books',
		line: 'Foreword by the paddle he threw. Chapter 4 is just “Stop blaming the table.”',
		rainCheck: 'Every copy was returned unread with a dent shaped like a paddle.'
	},
	{
		id: 'grudge-lure',
		cut: 'lure',
		name: 'Grudge Lure 3000',
		price: ['8', '49'],
		unit: 'each',
		tag: 'Aisle 2 · Tackle',
		line: 'Catches nothing. But it is shinier than your friend’s lure, and that is the real tournament.',
		rainCheck: 'Lost on the first cast. Snagged on the dock. Again.'
	},
	{
		id: 'code-book',
		cut: 'code-book',
		name: 'How to Code Better Than Brandon',
		price: ['−1', '00'],
		unit: 'we pay you',
		tag: 'Recalled',
		line: 'Every chapter ends with “just ask Brandon.” Ships with a bug Brandon already fixed.',
		rainCheck: 'Recalled. Brandon left a code review on it. 214 comments.',
		recalled: true
	},
	{
		id: 'racquet-vhs',
		cut: 'racquet-vhs',
		name: 'Racquetball: The Wall Always Wins',
		price: ['4', '99'],
		unit: 'VHS',
		tag: 'Aisle 3 · Video',
		line: '90 minutes of the ball coming back. Be kind, rewind. The wall did.',
		rainCheck: 'The tape got eaten. Even the VCR beat him.'
	},
	{
		id: 'trophy',
		cut: 'trophy',
		name: 'Participation Trophy, Family Size',
		price: ['24', '99'],
		unit: 'engraved',
		tag: 'Best seller',
		line: 'Engraved “Showed Up.” Large enough to see from across the rec room.',
		rainCheck: 'Back-ordered. The last one is on the table holding gravy.'
	},
	{
		id: 'excuse-dial',
		cut: 'excuse-dial',
		name: 'Pocket Excuse Generator',
		price: ['6', '66'],
		unit: 'batteries not incl.',
		tag: 'Aisle 5 · Gadgets',
		line: 'Spin for “Sun in my eyes,” “New paddle,” or “I wasn’t trying.” Works indoors too.',
		rainCheck: 'Discontinued. It started telling the truth.'
	},
	{
		id: 'wattle',
		cut: 'wattle',
		name: 'Clip-On Wattle',
		price: ['3', '50'],
		unit: 'one size',
		tag: 'Costumes',
		line: 'Become Uncle Turkey in seconds. Do not wear to the courts; it is a distraction and he will use that.',
		rainCheck: 'Sold out. The whole family wore them to dinner.'
	},
	{
		id: 'headphones',
		cut: 'headphones',
		name: 'Gobble-Cancelling Headphones',
		price: ['39', '00'],
		unit: 'pair',
		tag: 'Aisle 6 · Audio',
		line: 'Blocks out the group chat after every loss. Battery lasts about one rematch.',
		rainCheck: 'Out of stock. The group chat got louder.'
	},
	{
		id: 'decoy',
		cut: 'decoy',
		name: 'Stand-In Decoy Turkey',
		price: ['15', '00'],
		unit: 'stuffed',
		tag: 'Aisle 7 · Decoys',
		line: 'Sends a stuffed bird to the match in your place. Same win record, fewer excuses.',
		rainCheck: 'Unavailable. The decoy is on a winning streak and won’t come back.'
	}
];

export type RealLink = { id: string; title: string; href: string; source: string; line: string };

/** Real outbound links. Checked 2026-11-26; re-check before next November. */
export const realLinks: RealLink[] = [
	{
		id: 'pardon',
		title: 'National Thanksgiving Turkey Presentation',
		href: 'https://en.wikipedia.org/wiki/National_Thanksgiving_Turkey_Presentation',
		source: 'Wikipedia',
		line: 'A turkey gets pardoned every year. Uncle Turkey is still waiting on his.'
	},
	{
		id: 'talk-line',
		title: 'Butterball Turkey Talk-Line',
		href: 'https://www.butterball.com/turkey-talk-line',
		source: 'Butterball',
		line: 'Real experts answer real turkey questions. They have declined to coach ping pong.'
	},
	{
		id: 'wild-turkey',
		title: 'Wild turkey',
		href: 'https://en.wikipedia.org/wiki/Wild_turkey',
		source: 'Wikipedia',
		line: 'Can run about 25 mph. Still not fast enough to reach a racquetball.'
	},
	{
		id: 'snood',
		title: 'Snood (anatomy)',
		href: 'https://en.wikipedia.org/wiki/Snood_(anatomy)',
		source: 'Wikipedia',
		line: 'The floppy bit over the beak has a name. Now you can say it to his face.'
	},
	{
		id: 'turkeys-away',
		title: 'Turkeys Away',
		href: 'https://en.wikipedia.org/wiki/Turkeys_Away',
		source: 'Wikipedia',
		line: 'The WKRP episode where a turkey promotion goes about as well as his backhand.'
	}
];
