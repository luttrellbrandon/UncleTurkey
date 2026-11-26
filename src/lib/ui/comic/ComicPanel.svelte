<script lang="ts">
	import { tick } from 'svelte';
	import Starburst from '#lib/ui/Starburst.svelte';
	import ComicScene, { BUBBLE_START, HEADS, type SceneKey } from './ComicScene.svelte';
	import type { Bubble, Who } from '#lib/content/origin';

	type Props = {
		scene: SceneKey;
		label: string;
		caption?: string;
		bubbles?: Bubble[];
		sfx?: string;
		/** Where the SFX burst sits, in % of the scene. Default: the panel's bottom-right corner. */
		sfxAt?: { x: number; y: number };
		/** Let the shout bubble break past the panel border. */
		breakout?: boolean;
	};

	let { scene, label, caption, bubbles = [], sfx, sfxAt, breakout = false }: Props = $props();

	const NAMES: Record<Who, string> = { daniel: 'Daniel', steph: 'Steph', steve: 'Steve', brandon: 'Brandon' };
	const VB_W = 400;
	const VB_H = 260;
	/** Below this width the scene is too small to hold bubbles, so they move to a band above it. */
	const BAND_BELOW = 480;

	let boxW = $state(0);
	let boxH = $state(0);
	let bandH = $state(0);
	let els = $state<HTMLElement[]>([]);
	let heights = $state<number[]>([]);
	let tails = $state<string[]>([]);

	const band = $derived(boxW > 0 && boxW < BAND_BELOW);
	const sceneH = $derived((boxW * VB_H) / VB_W);

	const sideOf = (who: Who): 'l' | 'r' => ((HEADS[scene][who]?.x ?? 200) < VB_W / 2 ? 'l' : 'r');

	/** In-scene placement: data order reads top to bottom, each bubble fully below the last. */
	const tops = $derived.by(() => {
		const out: number[] = [];
		bubbles.forEach((_, i) => {
			if (i === 0) return out.push(BUBBLE_START[scene] ?? 3);
			const prevPct = heights[i - 1] && sceneH ? (heights[i - 1] / sceneH) * 100 : 20;
			out.push(out[i - 1] + prevPct + 2);
		});
		return out;
	});

	/** Tails are measured from the rendered bubbles, so every tail starts inside its own bubble. */
	$effect(() => {
		void boxW;
		void boxH;
		void bandH;
		void tops;
		void band;
		tick().then(() => {
			const next: string[] = [];
			const offsetY = band ? bandH : 0;
			const unit = boxW / VB_W;
			bubbles.forEach((b, i) => {
				const el = els[i];
				const head = HEADS[scene][b.who];
				if (!el || !head || !boxW) {
					next.push('');
					return;
				}
				const left = el.offsetLeft;
				const right = left + el.offsetWidth;
				const by = el.offsetTop + el.offsetHeight - 2;
				const hx = head.x * unit;
				const hy = offsetY + (head.y / VB_H) * sceneH;
				const bx = Math.min(Math.max(hx, left + 16), right - 16);
				const tx = hx + (hx < boxW / 2 ? 10 : -10) * unit;
				const ty = hy - 16 * unit;
				const dx = tx - bx;
				const dy = Math.max(ty - by, 8);
				const len = Math.hypot(dx, dy);
				// Point toward the speaker; never run across the scene's props and their lettering.
				const cap = band ? Math.max(bandH - by, 0) + 34 : 56;
				const reach = Math.min(Math.max(len - 4, 8), cap);
				const ex = bx + (dx / len) * reach;
				const ey = by + (dy / len) * reach;
				next.push(`${bx - 7},${by} ${ex},${ey} ${bx + 7},${by}`);
			});
			tails = next;
		});
	});

	function rightFor(shout: boolean | undefined, side: 'l' | 'r') {
		if (band) return shout && breakout ? '-1.75rem' : null;
		if (side !== 'r') return null;
		return shout && breakout ? '-2.75rem' : '3%';
	}
</script>

<figure class="panel relative border-[3px] border-ink bg-newsprint">
	{#if caption}
		<figcaption class="relative z-10 border-b-[3px] border-ink bg-secondary px-3 py-2">
			<span class="font-display text-[1.15rem] leading-[1.05] font-extrabold uppercase">{caption}</span>
		</figcaption>
	{/if}

	<div class="p-2.5">
		<div class="border-[2.5px] border-ink bg-newsprint">
			<div class="relative" bind:clientWidth={boxW} bind:clientHeight={boxH}>
				{#if bubbles.length}
					<div class={band ? 'flex flex-col gap-2 px-2 pt-2 pb-6' : 'contents'} bind:clientHeight={bandH}>
						{#each bubbles as b, i (i)}
							{@const side = sideOf(b.who)}
							<p
								bind:this={els[i]}
								bind:clientHeight={heights[i]}
								class="bubble z-10 border-[2.5px] border-ink bg-white px-2.5 py-1.5 sm:px-3 sm:py-2
									{band ? 'relative max-w-[82%]' : 'absolute'}
									{band ? (side === 'r' ? 'self-end' : 'self-start') : b.shout ? 'max-w-[50%]' : 'max-w-[46%]'}
									{b.shout ? 'shout border-[3px] border-primary' : ''}"
								style:top={band ? null : `${tops[i]}%`}
								style:left={band || side === 'r' ? null : '3%'}
								style:right={rightFor(b.shout, side)}
							>
								<span class="sr-only">{NAMES[b.who]}: </span>
								<span
									class="font-display leading-[1.05] font-extrabold uppercase
										{b.shout ? 'text-[1.2rem] text-primary sm:text-[1.5rem]' : 'text-[1rem] sm:text-[1.15rem]'}"
									>{b.text}</span
								>
							</p>
						{/each}
					</div>
				{/if}

				<div class="relative">
					<ComicScene {scene} {label} />
					{#if sfx && sfxAt}
						<div class="absolute z-20 -translate-x-1/2 -translate-y-1/2" style:left="{sfxAt.x}%" style:top="{sfxAt.y}%">
							<Starburst class="sfx aspect-square w-[5.5rem] sm:w-[8rem]" points={16} depth={0.22}>
								<span class="block font-display text-[1.2rem] leading-[0.9] font-black text-primary uppercase sm:text-[1.8rem]">{sfx}</span>
							</Starburst>
						</div>
					{/if}
				</div>

				{#if bubbles.length && boxW}
					<svg class="pointer-events-none absolute inset-0 z-[5] h-full w-full" viewBox="0 0 {boxW} {boxH || 1}" aria-hidden="true">
						{#each tails as pts, i (i)}
							{#if pts}
								<polygon points={pts} fill="#fff" stroke="none" />
								<polyline
									points={pts}
									fill="none"
									stroke={bubbles[i]?.shout ? 'var(--color-primary)' : 'var(--color-ink)'}
									stroke-width="2.5"
									stroke-linejoin="round"
								/>
							{/if}
						{/each}
					</svg>
				{/if}
			</div>
		</div>
	</div>

	{#if sfx && !sfxAt}
		<Starburst class="sfx absolute -right-3 -bottom-4 z-20 aspect-square w-[6.5rem] sm:w-[7.5rem]" points={16} depth={0.22}>
			<span class="block max-w-[5.2rem] font-display text-[1.25rem] leading-[0.9] font-black text-primary uppercase sm:text-[1.45rem]"
				>{sfx}</span
			>
		</Starburst>
	{/if}
</figure>

<style>
	:global(.sfx) {
		rotate: -10deg;
	}
	.panel {
		margin-bottom: 1rem;
	}
</style>
