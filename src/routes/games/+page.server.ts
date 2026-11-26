import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Only one Mini Game for now: the Games Hub sends players straight to it.
// Temporary (307) so the hub can return once a second game ships — delete this file then.
export const load: PageServerLoad = () => {
	redirect(307, '/games/turkey-hunt');
};
