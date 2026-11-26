<script lang="ts" module>
	import type { Who } from '#lib/content/origin';

	export type SceneKey =
		| 'florida'
		| 'classroom'
		| 'curve'
		| 'vegas'
		| 'graduation'
		| 'wizard'
		| 'masters'
		| 'flock'
		| 'fishing'
		| 'practice'
		| 'racquet';

	/** Where the first bubble starts (% of scene height) when the top of the scene holds a prop worth seeing. */
	export const BUBBLE_START: Partial<Record<SceneKey, number>> = { vegas: 27 };

	/** Where each speaker's beak sits in the 400×260 scene, so bubble tails can point at it. */
	export const HEADS: Record<SceneKey, Partial<Record<Who, { x: number; y: number }>>> = {
		florida: { daniel: { x: 176, y: 128 } },
		classroom: { daniel: { x: 120, y: 182 }, brandon: { x: 286, y: 182 } },
		curve: { daniel: { x: 120, y: 182 }, brandon: { x: 286, y: 182 } },
		vegas: { daniel: { x: 126, y: 176 }, steph: { x: 278, y: 176 } },
		graduation: { daniel: { x: 142, y: 154 }, brandon: { x: 286, y: 138 } },
		wizard: { daniel: { x: 92, y: 208 }, steve: { x: 256, y: 140 } },
		masters: { brandon: { x: 250, y: 138 } },
		flock: { daniel: { x: 180, y: 160 }, brandon: { x: 296, y: 160 } },
		fishing: { daniel: { x: 88, y: 156 }, brandon: { x: 304, y: 156 } },
		practice: { daniel: { x: 142, y: 168 } },
		racquet: { daniel: { x: 150, y: 152 }, brandon: { x: 292, y: 166 } }
	};
</script>

<script lang="ts">
	import ComicTurkey from './ComicTurkey.svelte';

	type Props = { scene: SceneKey; label: string };
	let { scene, label }: Props = $props();

	const INK = '#161210';
	const bulbs = Array.from({ length: 11 }, (_, i) => i);
</script>

<svg viewBox="0 0 400 260" class="block h-auto w-full" role="img" aria-label={label}>
	<g stroke={INK} stroke-linejoin="round">
		{#if scene === 'florida'}
			<rect width="400" height="260" fill="#fff4dc" stroke="none" />
			<circle cx="330" cy="70" r="38" fill="#ffd400" stroke-width="3" />
			<rect y="200" width="400" height="60" fill="#1b5fa8" stroke-width="3" />
			<path d="M0 214 h60 M120 230 h70 M260 216 h60" stroke="#fff4dc" stroke-width="3" opacity="0.6" />
			<path d="M42 200 q-6 -60 6 -110" fill="none" stroke="#7a3b16" stroke-width="9" stroke-linecap="round" />
			<path d="M48 90 q-30 -10 -44 10 q24 -4 44 -10 q-6 -30 -30 -36 q14 18 30 36 q20 -28 46 -24 q-26 6 -46 24 q36 -4 46 18 q-24 -12 -46 -18" fill="#1d7438" stroke-width="3" />
			<path d="M262 208 q30 -14 80 -4 l24 -6 l-6 10 l8 6 l-26 -2 q-46 10 -80 -4 z" fill="#1d7438" stroke-width="3" />
			<path d="M318 204 l4 6 l4 -6 l4 6 l4 -6" fill="none" stroke="#fff4dc" stroke-width="2" />
			<circle cx="292" cy="202" r="3" fill={INK} stroke="none" />
			<rect x="300" y="132" width="88" height="40" fill="#1d7438" stroke-width="3" />
			<text x="344" y="150" text-anchor="middle" class="sign">S. ILLINOIS</text>
			<text x="344" y="165" text-anchor="middle" class="sign">↑ 900 MI</text>
			<path d="M344 172 v28" stroke-width="5" />
			<ComicTurkey who="daniel" x={140} y={170} tilt={-14} />
			<path d="M184 120 q20 -18 40 -22" fill="none" stroke-width="3" stroke-dasharray="6 6" />
		{:else if scene === 'classroom' || scene === 'curve'}
			<rect width="400" height="260" fill="#f7e6bd" stroke="none" />
			<rect x="30" y="58" width="340" height="112" fill="#1d7438" stroke-width="4" />
			{#if scene === 'classroom'}
				<text x="50" y="96" class="chalk">y″ + p(t)y′ + q(t)y = 0</text>
				<text x="50" y="128" class="chalk">F = ma  ·  dy/dt = ky</text>
			{:else}
				<path d="M56 156 C120 156 140 74 200 74 C232 74 244 108 254 122" fill="none" stroke="#fff4dc" stroke-width="4" />
				<path d="M262 112 l14 18 m-6 -22 l-12 16" stroke="#d8141b" stroke-width="5" stroke-linecap="round" />
				<text x="300" y="100" class="chalk small">Class avg ↓↓</text>
				<rect x="190" y="198" width="54" height="40" fill="#fff" stroke-width="3" transform="rotate(-8 217 218)" />
				<text x="216" y="226" text-anchor="middle" class="grade" transform="rotate(-8 217 218)">A+++</text>
			{/if}
			<rect x="0" y="236" width="400" height="24" fill="#ead29a" stroke-width="3" />
			<ComicTurkey who="daniel" x={86} y={204} gear={scene === 'classroom' ? ['hearts'] : ['sweat']} />
			<ComicTurkey who="brandon" x={320} y={204} flip gear={['shades']} />
		{:else if scene === 'vegas'}
			<rect width="400" height="260" fill={INK} stroke="none" />
			<rect x="110" y="40" width="180" height="66" fill="#d8141b" stroke="#ffd400" stroke-width="4" />
			<text x="200" y="70" text-anchor="middle" class="marquee">Little Gobble</text>
			<text x="200" y="94" text-anchor="middle" class="marquee small">Wedding chapel</text>
			{#each bulbs as i (i)}
				<circle cx={116 + i * 16.8} cy="40" r="4" fill="#ffd400" stroke="none" />
				<circle cx={116 + i * 16.8} cy="106" r="4" fill="#ffd400" stroke="none" />
			{/each}
			<rect x="0" y="226" width="400" height="34" fill="#d8141b" stroke-width="3" />
			<ComicTurkey who="elvis" x={196} y={178} scale={0.95} gear={['collar', 'pompadour', 'shades']} />
			<path d="M246 236 v-58" stroke="#fff4dc" stroke-width="4" />
			<rect x="240" y="166" width="12" height="18" rx="6" fill="#c9a46a" stroke-width="2.5" />
			<ComicTurkey who="daniel" x={92} y={198} gear={['bowtie']} />
			<ComicTurkey who="steph" x={312} y={198} flip gear={['veil']} />
		{:else if scene === 'graduation'}
			<rect width="400" height="260" fill="#fff4dc" stroke="none" />
			<rect x="0" y="210" width="230" height="50" fill="#d8141b" stroke-width="3" />
			<rect x="236" y="190" width="164" height="70" fill="#ead29a" stroke-width="3" />
			{#each [60, 140, 210] as cx, i (cx)}
				<path d="M{cx} {50 + i * 16} l18 -8 l18 8 l-18 8 z" fill={INK} stroke-width="2" transform="rotate({i * 20 - 15} {cx + 18} {50 + i * 16})" />
			{/each}
			<ComicTurkey who="daniel" x={110} y={176} gear={['cap']} tilt={-6} />
			<ComicTurkey who="brandon" x={318} y={160} flip gear={['shades']} />
			<circle cx="346" cy="206" r="13" fill="#fff" stroke-width="3" />
			<path d="M346 198 v8 l6 4" fill="none" stroke-width="2.5" />
		{:else if scene === 'wizard'}
			<rect width="400" height="260" fill="#ead29a" stroke="none" />
			<!-- Steve, the Wizard: only his fan, his feet and a cable escape the curtain. -->
			<path d="M250 40 h150 v220 h-150 q16 -40 0 -80 q-16 -40 0 -70 q12 -30 0 -70 z" fill="#1d7438" stroke-width="4" />
			<path d="M286 40 v220 M326 40 v220 M366 40 v220" stroke="#0f4f25" stroke-width="3" />
			<ellipse cx="252" cy="150" rx="11" ry="24" fill="#1d7438" stroke-width="3" transform="rotate(-50 252 150)" />
			<ellipse cx="248" cy="172" rx="11" ry="24" fill="#ffd400" stroke-width="3" transform="rotate(-80 248 172)" />
			<rect x="246" y="30" width="158" height="14" fill="#ffd400" stroke-width="3" />
			<path d="M270 246 l-8 12 M284 246 l8 12" stroke="#ffd400" stroke-width="4" stroke-linecap="round" />
			<path d="M252 236 q-30 10 -62 -40" fill="none" stroke-width="3" />
			<rect x="40" y="168" width="150" height="70" fill="#fff4dc" stroke-width="3" />
			<rect x="58" y="120" width="112" height="56" fill={INK} stroke-width="3" />
			<text x="114" y="144" text-anchor="middle" class="error">ERROR</text>
			<text x="114" y="164" text-anchor="middle" class="error small">ERROR ERROR</text>
			<ComicTurkey who="daniel" x={66} y={226} scale={0.8} gear={['sweat']} />
		{:else if scene === 'masters'}
			<rect width="400" height="260" fill="#1b5fa8" stroke="none" />
			<path d="M0 60 h80 v40 h60 M400 90 h-90 v60 h-50 M0 180 h50 v-30 h70" fill="none" stroke="#ffd400" stroke-width="3" opacity="0.7" />
			<circle cx="140" cy="100" r="5" fill="#ffd400" stroke="none" />
			<circle cx="260" cy="150" r="5" fill="#ffd400" stroke="none" />
			<path d="M90 70 l-16 34 h14 l-10 30 l28 -42 h-14 l10 -22 z" fill="#ffd400" stroke-width="3" />
			<rect x="200" y="190" width="160" height="70" fill="#d8141b" stroke-width="3" />
			<ComicTurkey who="brandon" x={280} y={160} flip gear={['shades', 'cap']} />
			<rect x="100" y="168" width="90" height="50" fill="#fff4dc" stroke-width="3" transform="rotate(5 145 193)" />
			<text x="146" y="198" text-anchor="middle" class="grade small" transform="rotate(5 145 193)">M.S. CE+EE</text>
		{:else if scene === 'flock'}
			<rect width="400" height="260" fill="#f7e6bd" stroke="none" />
			<rect x="0" y="0" width="400" height="22" fill="#d8141b" stroke="none" />
			<rect x="40" y="214" width="320" height="26" fill="#1d7438" stroke-width="3" />
			<path d="M200 200 v14" stroke-width="4" />
			<ComicTurkey who="steve" x={70} y={170} scale={0.8} />
			<ComicTurkey who="daniel" x={150} y={180} scale={0.9} gear={['paddle']} />
			<ComicTurkey who="steph" x={236} y={176} scale={0.85} flip />
			<ComicTurkey who="brandon" x={326} y={180} scale={0.9} flip gear={['shades', 'paddle']} />
		{:else if scene === 'fishing'}
			<rect width="400" height="260" fill="#fff4dc" stroke="none" />
			<rect y="176" width="400" height="84" fill="#1b5fa8" stroke-width="3" />
			<path d="M20 200 h50 M150 236 h60 M300 246 h70" stroke="#fff4dc" stroke-width="3" opacity="0.6" />
			<!-- The catfish: mouth on the hook, forked tail, whiskers. Bigger than the boat. -->
			<path d="M252 116 L212 80" stroke-width="1.5" />
			<g transform="translate(190 40) rotate(6)">
				<path d="M30 30 q20 -46 80 -36 q20 -24 40 -2 q36 8 50 40 q-60 34 -150 22 q-20 -6 -20 -24 z" fill="#5a2a10" stroke-width="3" />
				<path d="M196 30 l30 -30 l-6 34 l8 30 l-34 -22 z" fill="#5a2a10" stroke-width="3" />
				<path d="M60 48 q50 14 120 0" fill="none" stroke="#c9a46a" stroke-width="3" />
				<circle cx="44" cy="22" r="6" fill="#fff4dc" stroke-width="2" />
				<circle cx="45" cy="22" r="2.5" fill="#161210" stroke="none" />
				<path d="M12 36 l20 -6 l0 14 z" fill="#161210" stroke-width="2" />
				<path d="M16 40 q-16 10 -30 34 M18 34 q-22 -2 -38 10 M22 44 q-10 18 -12 40" fill="none" stroke-width="2.5" stroke-linecap="round" />
			</g>
			<path d="M206 196 h160 l-18 26 h-124 z" fill="#c9a46a" stroke-width="3" />
			<ComicTurkey who="brandon" x={330} y={176} flip scale={0.85} gear={['shades', 'rod']} />
			<path d="M10 196 h110 l-16 24 h-80 z" fill="#c9a46a" stroke-width="3" />
			<ComicTurkey who="daniel" x={62} y={176} scale={0.8} gear={['rod', 'sweat']} />
			<path d="M136 120 q4 40 -2 66" fill="none" stroke-width="1.5" />
			<path d="M120 194 h18 v-14 h8 v24 h-26 z" fill="#7a3b16" stroke-width="2.5" />
		{:else if scene === 'practice'}
			<rect width="400" height="260" fill="#f7e6bd" stroke="none" />
			<path d="M0 40 h400 M0 80 h400" stroke="#ead29a" stroke-width="2" />
			<rect x="180" y="190" width="180" height="16" fill="#1d7438" stroke-width="3" />
			<rect x="350" y="60" width="16" height="146" fill="#1d7438" stroke-width="3" />
			<path d="M190 206 v40 M346 206 v40" stroke-width="5" />
			<circle cx="290" cy="120" r="7" fill="#fff" stroke-width="2.5" />
			<path d="M250 150 q20 -40 34 -26" fill="none" stroke-width="2" stroke-dasharray="4 5" />
			<ComicTurkey who="daniel" x={110} y={190} gear={['paddle', 'sweat']} />
		{:else if scene === 'racquet'}
			<rect width="400" height="260" fill="#fff4dc" stroke="none" />
			<path d="M0 120 h400" stroke="#d8141b" stroke-width="6" />
			<path d="M0 160 h400" stroke="#d8141b" stroke-width="3" />
			<rect y="200" width="400" height="60" fill="#ead29a" stroke-width="3" />
			<ComicTurkey who="daniel" x={120} y={186} gear={['goggles', 'racquet']} tilt={-18} />
			<circle cx="164" cy="140" r="9" fill="#1b5fa8" stroke-width="2.5" />
			<path d="M176 136 l26 -10 M178 146 l24 2" stroke-width="2.5" stroke-linecap="round" />
			<ComicTurkey who="brandon" x={320} y={186} flip scale={0.9} gear={['shades', 'racquet']} />
		{/if}
	</g>
</svg>

<style>
	svg :global(text) {
		stroke: none;
		font-family: var(--font-display);
		font-weight: 900;
		text-transform: uppercase;
	}
	.sign {
		fill: #fff4dc;
		font-size: 13px;
	}
	.chalk {
		fill: #fff4dc;
		font-size: 22px;
		text-transform: none;
	}
	.chalk.small {
		font-size: 14px;
		text-transform: uppercase;
	}
	.grade {
		fill: #d8141b;
		font-size: 18px;
	}
	.grade.small {
		font-size: 14px;
	}
	.marquee {
		fill: #fff4dc;
		font-size: 24px;
	}
	.marquee.small {
		font-size: 14px;
		fill: #ffd400;
	}
	.error {
		fill: #d8141b;
		font-size: 18px;
	}
	.error.small {
		font-size: 12px;
	}
</style>
