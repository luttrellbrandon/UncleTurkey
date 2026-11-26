<svelte:options namespace="svg" />

<script lang="ts">
	/**
	 * A drawn cartoon turkey for comic panels, built like the Turkey Hunt birds.
	 * Stand-in art until real Turkey Assets exist: no faces, no likeness.
	 */
	import type { Who } from '#lib/content/origin';
	import { faceUri, type FaceId } from '#lib/assets/characters/faces';

	type Gear = 'collar' | 'cap' | 'veil' | 'bowtie' | 'shades' | 'paddle' | 'racquet' | 'goggles' | 'rod' | 'hearts' | 'sweat' | 'pompadour';

	type Props = {
		who: Who | 'elvis';
		x: number;
		y: number;
		scale?: number;
		flip?: boolean;
		gear?: Gear[];
		tilt?: number;
	};

	let { who, x, y, scale = 1, flip = false, gear = [], tilt = 0 }: Props = $props();

	const INK = '#161210';
	const LOOKS: Record<Props['who'], { body: string; fan: [string, string, string] }> = {
		daniel: { body: '#7a3b16', fan: ['#d8141b', '#ffd400', '#f08a1c'] },
		steph: { body: '#9a4a1c', fan: ['#ffd400', '#1d7438', '#ffd400'] },
		steve: { body: '#5a2a10', fan: ['#1d7438', '#ffd400', '#1d7438'] },
		brandon: { body: '#3a2e28', fan: ['#1b5fa8', '#ffd400', '#1b5fa8'] },
		elvis: { body: '#fff4dc', fan: ['#ffd400', '#d8141b', '#ffd400'] }
	};

	const look = $derived(LOOKS[who]);
	const has = (g: Gear) => gear.includes(g);
	const feathers = [-60, -30, 0, 30, 60];
	/** Each cast member's illustrated turkey head; the Elvis officiant keeps a plain one. */
	const face = $derived(who === 'elvis' ? null : faceUri(who as FaceId));
	/** Head-worn gear sits higher on a face than on a bare turkey head. */
	const eyeShift = $derived(face ? '6 -8' : '0 0');
	const crownShift = $derived(face ? '3 -20' : '0 0');
</script>

<g transform="translate({x} {y}) scale({flip ? -scale : scale} {scale}) rotate({tilt})" stroke={INK} stroke-linejoin="round">
	{#each feathers as deg, i (deg)}
		<ellipse cx="-14" cy="-26" rx="11" ry="24" fill={look.fan[i % 3]} stroke-width="3" transform="rotate({deg - 25} -14 -4)" />
	{/each}
	<ellipse cx="0" cy="4" rx="31" ry="23" fill={look.body} stroke-width="3" />
	<ellipse cx="-4" cy="2" rx="17" ry="13" fill={look.fan[1]} stroke-width="3" />
	<line x1="-8" y1="26" x2="-12" y2="40" stroke-width="4" stroke-linecap="round" />
	<line x1="8" y1="26" x2="10" y2="40" stroke-width="4" stroke-linecap="round" />
	{#if has('collar')}
		<path d="M10 -6 l2 -30 l14 18 z M36 -6 l8 -28 l-18 14 z" fill="#ffffff" stroke-width="2.5" />
	{/if}
	{#if has('veil')}
		<path d="M24 -36 q-30 -6 -44 26 q-6 26 8 44 q6 -40 36 -64 z" fill="#ffffff" fill-opacity="0.9" stroke-width="2" transform="translate({crownShift})" />
	{/if}
	<rect x="16" y="-22" width="12" height="26" rx="5" fill="#e8574a" stroke="none" />
	{#if face}
		<image href={face} x="-3" y="-68" width="76" height="76" />
	{:else}
		<ellipse cx="30" cy="-24" rx="13" ry="11" fill="#e8574a" stroke-width="3" />
		<circle cx="32" cy="-27" r="5" fill="#fff4dc" stroke="none" />
		<circle cx="33.5" cy="-27" r="2.5" fill={INK} stroke="none" />
		<path d="M41 -27 L53 -22 L41 -18 Z" fill="#ffd400" stroke-width="2" />
		<ellipse cx="44" cy="-14" rx="3.5" ry="8" fill="#d8141b" stroke-width="2" />
		<ellipse cx="35" cy="-11" rx="5" ry="7" fill="#b3121b" stroke-width="2" />
	{/if}

	{#if has('shades')}
		<g transform="translate({eyeShift})">
			<path d="M24 -31 h18 v6 a4 4 0 0 1 -4 4 h-4 a4 4 0 0 1 -4 -4 v-2 h-2 v2 a4 4 0 0 1 -4 4 h-2 z" fill={INK} stroke-width="1" />
			<path d="M50 -38 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 z" fill="#ffd400" stroke-width="1.5" />
		</g>
	{/if}
	{#if has('goggles')}
		<g transform="translate({eyeShift})">
			<rect x="23" y="-32" width="20" height="10" rx="5" fill="#1b5fa8" fill-opacity="0.5" stroke-width="2.5" />
			<line x1="17" y1="-27" x2="23" y2="-27" stroke-width="2.5" />
		</g>
	{/if}
	{#if has('cap')}
		<g transform="translate({crownShift})">
			<path d="M14 -40 L32 -48 L50 -40 L32 -32 Z" fill={INK} stroke-width="2" />
			<rect x="24" y="-38" width="16" height="6" fill={INK} stroke="none" />
			<path d="M50 -40 v12" stroke="#ffd400" stroke-width="2.5" />
		</g>
	{/if}
	{#if has('veil')}
		<path d="M22 -36 l4 -10 l5 6 l5 -8 l4 8 l5 -6 l2 10 z" fill="#ffd400" stroke-width="2" transform="translate({crownShift})" />
	{/if}
	{#if has('pompadour')}
		<path d="M14 -28 q-4 -30 22 -34 q26 -4 30 14 q-12 -8 -26 -2 q-10 4 -14 18 q-6 -4 -12 4 z" fill="#161210" stroke-width="2" />
		<path d="M18 -26 v18 l5 -4 v-14 z" fill="#161210" stroke-width="1.5" />
		<path d="M-28 -4 q28 -14 58 0" fill="none" stroke="#ffd400" stroke-width="4" />
		<circle cx="0" cy="14" r="5" fill="#ffd400" stroke-width="2" />
	{/if}
	{#if has('bowtie')}
		<path d="M14 -2 l-8 -6 v12 z M14 -2 l8 -6 v12 z" fill="#d8141b" stroke-width="2" />
	{/if}
	{#if has('paddle')}
		<line x1="18" y1="10" x2="34" y2="18" stroke="#c9a46a" stroke-width="5" stroke-linecap="round" />
		<ellipse cx="44" cy="22" rx="12" ry="10" fill="#d8141b" stroke-width="3" />
	{/if}
	{#if has('racquet')}
		<line x1="18" y1="10" x2="34" y2="22" stroke={INK} stroke-width="5" stroke-linecap="round" />
		<ellipse cx="44" cy="30" rx="10" ry="14" fill="#ffd400" stroke-width="3" />
	{/if}
	{#if has('rod')}
		<path d="M14 6 Q60 -40 92 -70" fill="none" stroke={INK} stroke-width="4" stroke-linecap="round" />
	{/if}
	{#if has('hearts')}
		<path d="M54 -52 c-4 -6 -12 -2 -8 4 l8 8 l8 -8 c4 -6 -4 -10 -8 -4 z" fill="#d8141b" stroke-width="2" />
		<path d="M70 -36 c-3 -4 -9 -1 -6 3 l6 6 l6 -6 c3 -4 -3 -7 -6 -3 z" fill="#d8141b" stroke-width="2" />
	{/if}
	{#if has('sweat')}
		<path d="M18 -44 q-6 8 0 12 q6 -4 0 -12 z" fill="#1b5fa8" stroke-width="1.5" />
		<path d="M8 -36 q-5 7 0 10 q5 -3 0 -10 z" fill="#1b5fa8" stroke-width="1.5" />
	{/if}
</g>
