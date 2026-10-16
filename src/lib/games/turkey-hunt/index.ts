/**
 * Turkey Hunt Mini Game feature folder.
 * Phaser scenes, assets, and config belong here; the route only mounts the shell.
 */

export { default as TurkeyHuntGame } from './TurkeyHuntGame.svelte';

export const turkeyHuntMeta = {
	id: 'turkey-hunt',
	title: 'Turkey Hunt'
} as const;
