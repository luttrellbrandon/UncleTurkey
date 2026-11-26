import { POSE_COOKIE, danielPoses } from '#lib/content/daniel-poses';
import type { PageServerLoad } from './$types';

/**
 * Every visit shows the next Daniel Turkey pose in the doorbuster.
 * A first-time visitor starts on a random pose; the cookie walks them through all six.
 */
export const load: PageServerLoad = ({ cookies }) => {
	const count = danielPoses.length;
	const last = Number.parseInt(cookies.get(POSE_COOKIE) ?? '', 10);
	const pose = Number.isInteger(last) && last >= 0 ? (last + 1) % count : Math.floor(Math.random() * count);

	cookies.set(POSE_COOKIE, String(pose), {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		sameSite: 'lax',
		httpOnly: true
	});

	return { pose };
};
