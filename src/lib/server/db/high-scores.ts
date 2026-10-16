/**
 * High Score queries via Drizzle + D1.
 * Schema: `highScores` in ./schema.ts
 * SQL mirror: migrations/0001_high_scores.sql
 */

import { desc, asc, eq } from 'drizzle-orm';
import { getDb } from './index';
import { highScores } from './schema';
import type { D1Database } from './types';

export type HighScoreRow = {
	id: number;
	game_id: string;
	score: number;
	display_name: string | null;
	created_at: string;
};

export type HighScoreSubmit = {
	gameId: string;
	score: number;
	displayName?: string | null;
};

export async function listTopScores(
	d1: D1Database,
	gameId: string,
	limit = 10
): Promise<HighScoreRow[]> {
	const db = getDb(d1);
	const rows = await db
		.select()
		.from(highScores)
		.where(eq(highScores.gameId, gameId))
		.orderBy(desc(highScores.score), asc(highScores.createdAt))
		.limit(limit);

	return rows.map((row) => ({
		id: row.id,
		game_id: row.gameId,
		score: row.score,
		display_name: row.displayName,
		created_at: row.createdAt
	}));
}

export async function submitScore(d1: D1Database, input: HighScoreSubmit): Promise<void> {
	const db = getDb(d1);
	await db.insert(highScores).values({
		gameId: input.gameId,
		score: input.score,
		displayName: input.displayName ?? null
	});
}
