export type TargetId = 'daniel' | 'steph' | 'stuffed' | 'steve' | 'brandon';

export type Rivalry = 'Ping pong' | 'Fishing' | 'Racquetball';

export type HuntStatus = 'playing' | 'cleared' | 'failed' | 'won' | 'quit';

export type FailReason = 'time' | 'flyoff' | null;

/** Who is talking on the walkie strip: Uncle Turkey's excuses, or the store manager roasting him. */
export type Speaker = 'UNCLE T' | 'MGR';

export type Taunt = { id: number; speaker: Speaker; line: string };

export type HuntHud = {
	levelIndex: number;
	levelCount: number;
	rivalry: Rivalry;
	cam: string;
	oneLiner: string;
	levelScore: number;
	banked: number;
	quota: number;
	timeLeft: number;
	flyOffs: number;
	maxFlyOffs: number;
	streak: number;
	status: HuntStatus;
	failReason: FailReason;
	taunt: Taunt | null;
	/** Set when the Run can be saved: clear Level 6, or quit. */
	submitScore: number | null;
};

export type TurkeyHuntController = {
	destroy: () => void;
	retry: () => void;
	next: () => void;
	quit: () => void;
	restart: () => void;
};
