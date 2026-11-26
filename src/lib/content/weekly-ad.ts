/**
 * Home page "Weekly Ad" copy. Point values must match Turkey Hunt (see CONTEXT.md → Hunt Target).
 * Edit jokes freely; keep them roasts, never mean.
 */

export type Special = {
	id: string;
	name: string;
	points: number;
	unit: string;
	line: string;
	tag?: string;
};

export const doorbuster = {
	shout: 'Doorbuster!',
	title: ['Whole', 'Uncle', 'Turkey'],
	price: { whole: '69', cents: '¢', unit: 'per lb' },
	wasPrice: ['Reg. priceless', '(to his mom)'],
	finePrint:
		'Fresh, never frozen.* Grade: questionable. Hand-named by the kids, loudly. Limit one per family. Please. *Has absolutely been frozen.'
};

export const huntCoupon = {
	title: 'Play Turkey Hunt',
	terms: 'Good for one Run · 6 Levels · no rain checks',
	expires: 'Expires when he does the dishes',
	reveal: "Manager's note: he's faster than he looks. Not by much.",
	href: '/games/turkey-hunt'
};

export const specials: Special[] = [
	{
		id: 'daniel',
		name: 'Daniel Turkey',
		points: 100,
		unit: 'pts',
		line: 'The house brand. Tough, loud, a little gamey.'
	},
	{
		id: 'steph',
		name: 'Steph Turkey',
		points: 200,
		unit: 'pts',
		line: 'Free-range. Organic. Hard to pin down.'
	},
	{
		id: 'stuffed',
		name: 'Stuffed Turkey',
		points: 200,
		unit: 'pts',
		line: 'Decoy. Not a real turkey. Unlike some people.'
	},
	{
		id: 'steve',
		name: 'Steve Turkey',
		points: 400,
		unit: 'pts',
		line: 'Premium cut. Rarely seen. Worth the wait.',
		tag: 'Best value'
	},
	{
		id: 'brandon',
		name: 'Brandon Turkey',
		points: -100,
		unit: 'pts',
		line: 'Do not shoot. Costs you points and dignity.',
		tag: 'Recalled'
	}
];

export const rivalryAisles = [
	{ id: 'ping-pong', sport: 'Ping Pong', levels: 'Levels 1–2', line: 'Paddles sold separately. Excuses included.' },
	{ id: 'fishing', sport: 'Fishing', levels: 'Levels 3–4', line: "Today's catch is a turkey. Again." },
	{ id: 'racquetball', sport: 'Racquetball', levels: 'Levels 5–6', line: 'Four walls. Zero mercy. Harder.' }
];

export const nutrition = {
	serving: '1 uncle',
	servingsPer: 'Too many',
	calories: 'Yes',
	footnote: '*Percent Daily Values are based on a 2,000-calorie uncle. Your uncle may vary.',
	rows: [
		{ label: 'Gravy', value: '100%', bold: true },
		{ label: 'Opinions (unsolicited)', value: '240%', bold: true },
		{ label: 'Dad jokes', value: '180%' },
		{ label: 'Ping pong trash talk', value: '95%' },
		{ label: 'Humility', value: '0%' }
	],
	ingredients:
		'Stuffing, more stuffing, a nickname he did not choose, one (1) folding chair at the adult table, love.'
};

export const departments = [
	{
		href: '/origin',
		aisle: 'Aisle 1',
		title: 'Origin Story',
		line: 'How the kids named him. Aged like leftover stuffing.'
	},
	{
		href: '/games',
		aisle: 'Aisle 3',
		title: 'Games Hub',
		line: 'Turkey Hunt is on the shelf. More birds in the back.'
	},
	{
		href: '/links',
		aisle: 'Aisle 7',
		title: 'Turkey Links',
		line: 'Costumes and questionable merch, so you can become him.'
	}
];
