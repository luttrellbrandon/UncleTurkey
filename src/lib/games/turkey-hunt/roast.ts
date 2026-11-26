/**
 * Turkey Hunt roast copy. Uncle Turkey is bad at ping pong, fishing and racquetball,
 * and every line here should say so. Roast, never cruel. Edit freely.
 */
import type { Rivalry, Speaker, TargetId } from './types';

type Line = { speaker: Speaker; line: string };

/** Meme captions that slam on when a bird is bagged. Daniel's change with the Rivalry. */
export const DANIEL_CAPTIONS: Record<Rivalry, string[]> = {
	'Ping pong': ['Net. Again.', 'Backhand still broken', 'Served into own face', 'Table: warped (allegedly)', 'Lost 11–0. To a turkey.'],
	Fishing: ['Caught: nothing', 'Hooked his own hat', 'The one that got away (it was him)', 'Bait > him', 'Fish: 1 · Daniel: 0'],
	Racquetball: ['Hit by own serve', 'Wall wins again', 'Ceiling ball: his face', 'Goggles: decorative', 'Four walls. Zero points.']
};

export const CAPTIONS: Record<Exclude<TargetId, 'daniel'>, string[]> = {
	steph: ['Free-range? Not anymore', 'Basted!', 'Organic takedown'],
	stuffed: ['Stuffing found', 'Fake bird, real points', 'Decoy deleted'],
	steve: ['Premium cut!', 'Rare. Like a Daniel win.', 'Steve spotted. Steve stopped.'],
	brandon: ['Recalled!', 'Wrong bird, chief', 'You shot the good one']
};

export const BULK_CAPTION = 'Bulk discount +50';

/** Walkie-strip lines. UNCLE T makes excuses; MGR (the store manager) roasts him. */
export const LEVEL_INTRO: Record<Rivalry, Line[]> = {
	'Ping pong': [
		{ speaker: 'MGR', line: 'Rec room. Uncle Turkey has been "warming up" since dinner.' },
		{ speaker: 'UNCLE T', line: 'The paddle has a dead spot. It is the whole paddle.' }
	],
	Fishing: [
		{ speaker: 'MGR', line: 'The dock. He brought three rods and zero patience.' },
		{ speaker: 'UNCLE T', line: 'The fish knew I was coming. Somebody tipped them off.' }
	],
	Racquetball: [
		{ speaker: 'MGR', line: 'Court 4. Please keep the ambulance lane clear.' },
		{ speaker: 'UNCLE T', line: 'I play a defensive style. Mostly defending my face.' }
	]
};

export const ON_MISS: Record<Rivalry, Line[]> = {
	'Ping pong': [
		{ speaker: 'UNCLE T', line: 'Missed! See? It is harder than it looks.' },
		{ speaker: 'MGR', line: 'That shot went wider than his forehand.' },
		{ speaker: 'UNCLE T', line: 'Let. That was a let. Replay it.' }
	],
	Fishing: [
		{ speaker: 'UNCLE T', line: 'Missed! Welcome to my entire fishing career.' },
		{ speaker: 'MGR', line: 'Nice cast. Daniel would have snagged the dock.' },
		{ speaker: 'UNCLE T', line: 'Wind. Definitely the wind.' }
	],
	Racquetball: [
		{ speaker: 'UNCLE T', line: 'Missed! Now you know how every serve of mine feels.' },
		{ speaker: 'MGR', line: 'Off the back wall, like his dignity.' },
		{ speaker: 'UNCLE T', line: 'I was not ready. Do it over.' }
	]
};

export const ON_FLY_OFF: Line[] = [
	{ speaker: 'UNCLE T', line: 'Gobble gobble, sucker. Learned that from losing at everything.' },
	{ speaker: 'MGR', line: 'Got away clean. First clean getaway this family has seen from him.' },
	{ speaker: 'UNCLE T', line: 'That is called footwork. I have it in exactly one sport: running.' }
];

export const ON_DANIEL_HIT: Line[] = [
	{ speaker: 'UNCLE T', line: 'Ow. Rematch. Best of seven. Best of eleven.' },
	{ speaker: 'MGR', line: 'Down goes the house brand.' },
	{ speaker: 'UNCLE T', line: 'I let you have that one. Like every point.' }
];

export const ON_BRANDON_HIT: Line[] = [
	{ speaker: 'MGR', line: 'Cleanup on aisle 3. Brandon Turkey was recalled for a reason.' },
	{ speaker: 'UNCLE T', line: 'Ha! Finally, someone losing worse than me.' }
];

export const ON_BULK: Line[] = [
	{ speaker: 'MGR', line: 'Three in a row. That is two more wins than Daniel had all summer.' },
	{ speaker: 'UNCLE T', line: 'Streaks are overrated. I would know, I have never had one.' }
];

export const ON_FAIL: Record<'time' | 'flyoff', Line[]> = {
	time: [{ speaker: 'UNCLE T', line: 'Out of time! Now you are playing like me. Retry?' }],
	flyoff: [{ speaker: 'UNCLE T', line: 'Three got away. Honestly? Personal best for me.' }]
};

export const ON_CLEAR: Line[] = [
	{ speaker: 'MGR', line: 'Quota cleared. Daniel has never cleared anything but the buffet.' },
	{ speaker: 'UNCLE T', line: 'Cleared? Fine. Next one has a warped table, though.' }
];

export const ON_WIN: Line = {
	speaker: 'MGR',
	line: 'All six Levels. You beat Uncle Turkey at all three of his sports. He is not surprised.'
};

export const ON_QUIT: Line = {
	speaker: 'UNCLE T',
	line: 'Quitting halfway? Now that is the authentic Uncle Turkey experience.'
};

export function pick<T>(items: T[]): T {
	return items[Math.floor(Math.random() * items.length)];
}
