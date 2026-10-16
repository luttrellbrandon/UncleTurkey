-- High Scores for Mini Games (Cloudflare D1)
-- Apply with: wrangler d1 migrations apply <DATABASE_NAME>

CREATE TABLE IF NOT EXISTS high_scores (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	game_id TEXT NOT NULL,
	score INTEGER NOT NULL,
	display_name TEXT,
	created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_high_scores_game_score
	ON high_scores (game_id, score DESC, created_at ASC);
