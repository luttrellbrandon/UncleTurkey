import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

/** High Scores for Mini Games (D1 / SQLite). */
export const highScores = sqliteTable('high_scores', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	gameId: text('game_id').notNull(),
	score: integer('score').notNull(),
	displayName: text('display_name'),
	createdAt: text('created_at')
		.notNull()
		.$defaultFn(() => new Date().toISOString())
});
