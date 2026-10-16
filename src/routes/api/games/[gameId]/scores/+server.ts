import { json, error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { listTopScores, submitScore } from '#lib/server/db/high-scores';
import type { D1Database } from '#lib/server/db/types';

/**
 * GET  /api/games/:gameId/scores — top High Scores for a Mini Game
 * POST /api/games/:gameId/scores — submit { score, displayName? }
 *
 * D1 binding: platform.env.DB after adapter-cloudflare + wrangler are wired.
 */

function getD1(platform: App.Platform | undefined): D1Database | null {
	return platform?.env?.DB ?? null;
}

export async function GET({ params, platform, url }: RequestEvent) {
	const gameId = params.gameId;
	if (!gameId) error(400, 'Missing gameId');

	const limit = Number(url.searchParams.get('limit') ?? '10');
	const d1 = getD1(platform);

	if (!d1) {
		return json({
			gameId,
			scores: [],
			stub: true,
			message: 'D1 not bound yet — connect wrangler DB binding.'
		});
	}

	const scores = await listTopScores(d1, gameId, Number.isFinite(limit) ? limit : 10);
	return json({ gameId, scores });
}

export async function POST({ params, platform, request }: RequestEvent) {
	const gameId = params.gameId;
	if (!gameId) error(400, 'Missing gameId');

	const body = (await request.json().catch(() => null)) as {
		score?: unknown;
		displayName?: unknown;
	} | null;

	const score = typeof body?.score === 'number' ? body.score : NaN;
	if (!Number.isFinite(score) || score < 0) {
		error(400, 'Body must include a non-negative numeric score');
	}

	const displayName =
		typeof body?.displayName === 'string' && body.displayName.trim()
			? body.displayName.trim().slice(0, 32)
			: null;

	const d1 = getD1(platform);
	if (!d1) {
		return json(
			{
				ok: false,
				stub: true,
				message: 'D1 not bound yet — score not persisted.'
			},
			{ status: 503 }
		);
	}

	await submitScore(d1, { gameId, score, displayName });
	return json({ ok: true, gameId, score, displayName }, { status: 201 });
}
