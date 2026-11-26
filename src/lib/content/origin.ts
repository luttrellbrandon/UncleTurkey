/**
 * The Origin Story of Uncle Turkey, told as the Uncle Turkey Market's Sunday Funnies.
 * Core facts come from Brandon (who, for the record, wrote this). The embellishments are tall tales.
 */

export type Who = 'daniel' | 'steph' | 'steve' | 'brandon';

export type Bubble = { who: Who; text: string; shout?: boolean };

export type Scene =
	| 'florida'
	| 'classroom'
	| 'curve'
	| 'vegas'
	| 'graduation'
	| 'wizard'
	| 'masters'
	| 'flock';

export type OriginChapter = {
	id: string;
	title: string;
	/** Narration box inside the panel. */
	caption: string;
	scene: Scene;
	bubbles: Bubble[];
	/** Sound effect in a starburst. */
	sfx?: string;
	body: string[];
};

export const originTitle = 'The Legend of Uncle Turkey';

export const originIntro =
	'Every family has a legend. Ours has feathers, a questionable backhand, and no recorded fishing victories. This is the true* story of Daniel Turkey, the bird the kids named Uncle Turkey.';

export const originDisclaimer =
	'*True-ish. Fish have been measured with the honor system. Ping pong scores have been independently verified by Brandon.';

export const originChapters: OriginChapter[] = [
	{
		id: 'florida',
		title: 'Florida Man? No. Florida Turkey.',
		caption: 'Our story begins in Florida, where the turkeys are humid and the ambitions are damp.',
		scene: 'florida',
		bubbles: [{ who: 'daniel', text: 'There has to be more to life than dodging hurricanes and gators.' }],
		sfx: 'Flap!',
		body: [
			'Long before he was Uncle Turkey, Daniel was just a young bird in Florida with big dreams and a sunburned wattle. Every morning he looked north and wondered what life was like somewhere with seasons, hills and fewer things trying to eat him.',
			'So one day he packed his three belongings (a ping pong paddle he did not know how to use, a fishing rod he would never use correctly, and an unearned confidence) and flapped north. He landed in Southern Illinois, which he called "better grounds." The locals called it "Tuesday."'
		]
	},
	{
		id: 'classroom',
		title: 'Summer School of Hard Knocks',
		caption: 'Meanwhile, at SIU: summer session. Physics. Differential equations. No air conditioning.',
		scene: 'classroom',
		bubbles: [
			{ who: 'daniel', text: 'Whoa. Who is THAT guy? He’s the coolest guy I’ve ever met.' },
			{ who: 'brandon', text: 'Sup. Brandon. I already finished the homework.' }
		],
		sfx: 'Cool!',
		body: [
			'Determined to better himself, Daniel enrolled in summer physics and differential equations at SIU, because nothing says "fun summer" like second-order linear ODEs in July.',
			'It was there, in a sweltering lecture hall, that he met the coolest guy he had ever laid his beady little eyes on: a guy named Brandon. Sunglasses indoors. Homework done before it was assigned. Somehow not sweating in a room with no air conditioning. Daniel took notes on everything Brandon said, including "is this seat taken?"'
		]
	},
	{
		id: 'curve',
		title: 'The Curve Breaker',
		caption: 'Every exam. Every single exam.',
		scene: 'curve',
		bubbles: [
			{ who: 'brandon', text: 'Professor, with respect, I am simply better than these chumps.', shout: true },
			{ who: 'daniel', text: 'I am one of the chumps.' }
		],
		sfx: 'Snap!',
		body: [
			'Brandon wasn’t just good at differential equations. He was so good that he broke the curve on every test. Not bent. Broken. The class average dropped two letter grades every time his paper hit the desk.',
			'It got so bad that Brandon had to go to office hours, not for help, but to argue with the professor about exactly how much better he was than everyone else. He brought charts. Daniel, meanwhile, discovered that integrating factors are not a type of protein shake, and quietly accepted his role in the curve as "the reason it exists."'
		]
	},
	{
		id: 'vegas',
		title: 'Viva Las Gobbles',
		caption: 'One thing led to another. The other thing was Las Vegas.',
		scene: 'vegas',
		bubbles: [
			{ who: 'steph', text: 'I do!' },
			{ who: 'daniel', text: 'I do too! Is that how this works?' }
		],
		sfx: 'Uh-huh-huh!',
		body: [
			'Somewhere between a failed quiz and a successful nap, Daniel met the love of his life: Steph Turkey, free-range and way out of his league. One thing led to another, and the two of them flew to Las Vegas to get hitched.',
			'Some say the ceremony was officiated by Elvis himself. Others say it was a guy named Gary in a rented jumpsuit. Daniel insists it was the King, and nobody has the heart to check. Either way, Steph and Daniel have been happily ever married ever since. Steph is still the best decision he has ever made. It is also the only good shot he has ever taken.'
		]
	},
	{
		id: 'graduation',
		title: 'Cap & Gown (Eventually)',
		caption: 'Many semesters later. Many, many semesters.',
		scene: 'graduation',
		bubbles: [
			{ who: 'brandon', text: 'Congrats! I finished a while ago. Anyway.' },
			{ who: 'daniel', text: 'I did it! I am a graduate turkey!' }
		],
		sfx: 'Toss!',
		body: [
			'Against all odds, and at least one change of major, Uncle Turkey finally graduated. It was a proud day, the cap fit his little head perfectly, and he only tripped once on the stage.',
			'Of course, he did not graduate before Brandon. Brandon was already in the audience, clapping politely and checking his watch. Some call that friendship. Brandon calls it "being first, as usual."'
		]
	},
	{
		id: 'wizard',
		title: 'Off to See the Wizard',
		caption: 'Follow the cubicle road.',
		scene: 'wizard',
		bubbles: [
			{ who: 'steve', text: 'Pay no attention to the turkey behind the curtain.' },
			{ who: 'daniel', text: 'Hello, world? Is it supposed to say "error" this many times?' }
		],
		sfx: 'Click!',
		body: [
			'Diploma in claw, Daniel went to work for Steve Turkey, known around the office as the Wizard of Oz: rarely seen, deeply powerful, and possibly operating everything from behind a curtain.',
			'Under the Wizard’s guidance, Daniel took his first wobbly steps into programming. He learned that "it works on my machine" is not a deployment strategy, that semicolons have feelings, and that the Wizard always knows when you have not run the tests.'
		]
	},
	{
		id: 'masters',
		title: 'A Little Bit Better',
		caption: 'Meanwhile, back at SIU, Brandon was not finished being better.',
		scene: 'masters',
		bubbles: [
			{ who: 'brandon', text: 'A master’s in computer AND electrical engineering. Just to be safe.' }
		],
		sfx: 'Ding!',
		body: [
			'Brandon stuck around and decided that one degree was cute, but two was a statement. He earned his master’s in computer and electrical engineering, mostly so that he would always be just a little bit better than Daniel, on paper and in person.',
			'Daniel sent a card. It said "congrats" and was signed in crayon. Brandon framed it next to his diploma, as a reminder of where he came from (the top of the curve).'
		]
	},
	{
		id: 'flock',
		title: 'The Flock Reunites',
		caption: 'And lo and behold, the turkeys came home to roost.',
		scene: 'flock',
		bubbles: [
			{ who: 'brandon', text: 'Hi again. I’m better at ping pong now. Still.' },
			{ who: 'daniel', text: 'Of course you are.' }
		],
		sfx: 'Gobble!',
		body: [
			'Eventually, Brandon came to work with all of these turkeys together: Daniel, Steph, and the Wizard himself, Steve. The band was back. The flock was whole. The ping pong table was in grave danger.',
			'And now we are all one big, happy, slightly competitive work family, where the coffee is strong, the code reviews are honest, and Uncle Turkey is still waiting for his first win.'
		]
	}
];

/** Tall tales. All of them are true, according to Brandon. */
export const fishTales = {
	title: 'Tall Tales from the Dock',
	intro:
		'Every fishing trip ends the same way: Brandon catches the first fish, the most fish, and the biggest fish. Daniel catches feelings.',
	tales: [
		{
			stat: 'First fish',
			value: '00:00:04',
			line: 'Brandon once caught a bass before his lure hit the water. The bass jumped up to meet it, out of respect.'
		},
		{
			stat: 'Most fish',
			value: '47 to 0',
			line: 'The lake has asked Brandon to slow down. Daniel caught a boot, a branch, and his own hat, twice.'
		},
		{
			stat: 'Biggest fish',
			value: 'Too big to measure',
			line: 'Brandon’s catfish was so big the boat had to be expanded. It is now a small island with its own zip code.'
		}
	],
	scoreboard: [
		{ label: 'Fish, Brandon', value: 'All of them' },
		{ label: 'Fish, Daniel', value: '0 (one maybe, it got away)' },
		{ label: 'Excuses, Daniel', value: 'Wind, sun, bait, the fish knew' }
	]
};

export const pingPongLog = {
	title: 'Ping Pong Practice Log',
	intro:
		'Some days at the office, if you listen closely, you can hear it: the soft tok-tok-tok of Uncle Turkey practicing alone against the folded-up half of the table. Practicing, and practicing, and practicing, wishing for just one day to be better than Brandon.',
	entries: [
		{ day: 'Monday', note: 'Practiced serves for an hour. Hit the ceiling light. Twice.' },
		{ day: 'Tuesday', note: 'Watched a tutorial. Felt ready. Was not ready.' },
		{ day: 'Wednesday', note: 'Challenged Brandon. Lost 11–2. The 2 were Brandon’s serves into the net, out of pity.' },
		{ day: 'Thursday', note: 'Bought a new paddle. Blamed the old paddle.' },
		{ day: 'Friday', note: 'Lost again. Said "the table is warped." The table is fine.' }
	],
	tally: [
		{ label: 'Days practiced', value: 'Too many to count' },
		{ label: 'Wins vs. Brandon', value: '0' },
		{ label: 'Hope', value: 'Undefeated' }
	]
};

export const racquetball = {
	title: 'Racquetball: Not His Sport',
	body: [
		'Racquetball is a simple game. You hit a ball against a wall, and it comes back. For Uncle Turkey, it mostly comes back into his face.',
		'He has tried. Oh, he has tried. He has bought the goggles, stretched the hamstrings, and studied the angles. He has served into the back of his own head, which experts say is not physically possible. He has lost to the wall, which was not even playing. And every single week he comes back for more, because if there is one thing Uncle Turkey has, it is heart. Not aim. Heart.'
	],
	bubbles: [
		{ who: 'daniel' as Who, text: 'I’m just warming up.' },
		{ who: 'brandon' as Who, text: 'It’s the third game.' }
	]
};
