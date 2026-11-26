<script lang="ts">
	import { tick } from 'svelte';
	import Starburst from '#lib/ui/Starburst.svelte';
	import ProductCut from '#lib/ui/ProductCut.svelte';
	import { doorbuster, products, realLinks } from '#lib/content/turkey-links';

	// Which items have been "added to cart" (and so turned into a rain check).
	let checked = $state<Record<string, boolean>>({});

	async function toggle(id: string, open: boolean) {
		checked[id] = open;
		await tick();
		document.getElementById(open ? `rc-${id}-close` : `buy-${id}`)?.focus();
	}

	const reviews = [
		{
			stars: 1,
			quote: 'Bought the kit. Lost to the kit.',
			who: 'Verified purchaser, rec room'
		},
		{
			stars: 2,
			quote: 'The lure works great. On me. It is in my thumb.',
			who: 'Anonymous, on the dock'
		},
		{
			stars: 5,
			quote: 'Got one for my brother-in-law. Watching him use it was worth every penny.',
			who: 'Not Daniel'
		}
	];

	// Five-point star for the review ratings, drawn (no glyphs).
	const STAR = '10,1 12.6,7.2 19,7.6 14,11.8 15.6,18.4 10,14.8 4.4,18.4 6,11.8 1,7.6 7.4,7.2';
</script>

<svelte:head>
	<title>Turkey Links · Seasonal Aisle Sale</title>
	<meta
		name="description"
		content="Self-improvement for the average turkey: the Stop Losing Kit, Ping Pong for the Average Turkey, the Grudge Lure 3000, and a few real turkey links."
	/>
</svelte:head>

<div class="border-b-2 border-ink bg-ink text-secondary">
	<p
		class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-1.5 text-[0.8rem] font-bold tracking-[0.08em] uppercase"
	>
		<span><span class="mr-2 bg-secondary px-1.5 py-0.5 text-ink">Seasonal Aisle</span>Self-improvement sale</span>
		<span class="hidden sm:inline">All sales final · so are all losses</span>
	</p>
</div>

<div class="mx-auto grid max-w-6xl gap-3 overflow-x-clip px-3 pt-3 pb-6 sm:px-4 lg:grid-cols-12 lg:gap-4 lg:pt-5">
	<!-- DOORBUSTER: the kit, billed 3x the rest -->
	<section
		class="relative border-[3px] border-ink bg-primary px-4 pt-2.5 pb-4 text-primary-content lg:col-span-7 lg:px-8 lg:pt-6 lg:pb-7"
		aria-labelledby="kit-title"
	>
		<p class="font-script text-[2.2rem] leading-none text-secondary lg:text-[3.6rem]">{doorbuster.shout}</p>
		<h1
			id="kit-title"
			class="relative z-10 mt-1 font-display text-[clamp(4.25rem,18vw,6rem)] leading-[0.82] font-black tracking-[-0.02em] uppercase"
		>
			{#each doorbuster.title as word, i (i)}<span class="block">{word}</span>{/each}
		</h1>

		<Starburst
			class="kit-burst absolute top-[5.25rem] -right-3.5 z-20 aspect-square w-[9.25rem] text-ink sm:w-[11rem] lg:top-[4.5rem] lg:-right-2 lg:w-[14rem]"
		>
			<span class="block font-display text-[3.6rem] leading-[0.8] font-black tabular-nums lg:text-[5.6rem]"
				><span class="align-top text-[0.4em]">$</span>{doorbuster.price.whole}<span class="align-top text-[0.42em]"
					>{doorbuster.price.cents}</span
				></span
			>
			<span class="block text-[0.85rem] font-bold tracking-[0.06em] uppercase lg:text-lg">{doorbuster.price.unit}</span>
		</Starburst>

		<div class="mt-4 flex items-end gap-3 lg:mt-7 lg:gap-6">
			<figure class="w-[48%] max-w-[16rem] shrink-0 border-[3px] border-dashed border-secondary bg-newsprint p-1.5">
				<ProductCut cut="kit" label="An open yellow carton labeled Stop Losing To Your Friends, with a paddle, a fishing rod, a racquetball and a Good Game card sticking out." class="block w-full border-2 border-ink bg-base-200" />
				<figcaption class="px-1 pt-1 pb-0.5 text-center text-[0.75rem] leading-tight font-bold text-ink uppercase">
					Contents may have lost before
				</figcaption>
			</figure>
			<div class="min-w-0 flex-1">
				<p class="text-sm leading-tight font-bold uppercase line-through decoration-2 lg:text-base">
					{#each doorbuster.wasPrice as part, i (i)}<span class="block">{part}</span>{/each}
				</p>
				<p class="mt-2 max-w-[40ch] text-[0.88rem] leading-snug lg:text-base">{doorbuster.contents}</p>
			</div>
		</div>

		<p class="mt-3 max-w-[60ch] text-[0.88rem] leading-snug lg:text-base">{doorbuster.finePrint}</p>

		<div class="mt-4" aria-live="polite">
			{#if checked.kit}
				<div class="rain-check relative border-[3px] border-dashed border-secondary bg-newsprint p-1">
					<div class="flex flex-wrap items-center gap-x-4 gap-y-2 border-2 border-ink bg-newsprint px-3 py-2.5 text-ink">
						<p class="min-w-0 flex-1">
							<span class="flex items-baseline justify-between gap-2">
								<span class="font-display text-[2rem] leading-none font-black text-primary uppercase">Rain check</span>
								<span class="text-[0.75rem] font-bold tracking-[0.06em] uppercase">No. 0001 · Valid never</span>
							</span>
							<span class="mt-1 block text-[0.92rem] leading-snug">{doorbuster.rainCheck}</span>
						</p>
						<button id="rc-kit-close" type="button" class="buy-btn bg-newsprint" onclick={() => toggle('kit', false)}>Put it back</button>
					</div>
				</div>
			{:else}
				<button id="buy-kit" type="button" class="buy-btn w-full bg-secondary text-[1.6rem] sm:w-auto" onclick={() => toggle('kit', true)}>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"
						><path d="M2 4h3l2.5 11h11L21 7H6.5" stroke-linejoin="round" /><path d="M9 20h.01M17 20h.01" stroke-width="4" stroke-linecap="square" /></svg
					>
					Add kit to cart
				</button>
			{/if}
		</div>
	</section>

	<!-- CUSTOMER REVIEWS (desktop: beside the doorbuster) -->
	<section class="border-[3px] border-ink bg-newsprint p-3 lg:col-span-5 lg:p-4" aria-labelledby="reviews-title">
		<h2 id="reviews-title" class="border-b-[6px] border-ink pb-1 font-display text-[2.4rem] leading-none font-black uppercase">
			Customer reviews
		</h2>
		<p class="flex items-end justify-between border-b-4 border-ink py-1.5">
			<b class="font-display text-[1.45rem] leading-none font-extrabold uppercase">Average rating</b>
			<b class="font-display text-[2.2rem] leading-none font-black tabular-nums">2.7<span class="text-[0.5em]"> / 5</span></b>
		</p>
		<ul>
			{#each reviews as r (r.quote)}
				<li class="border-b border-ink py-2.5 last:border-0">
					<span class="flex gap-0.5" role="img" aria-label="{r.stars} out of 5 stars">
						{#each [1, 2, 3, 4, 5] as n (n)}
							<svg class="h-4 w-4" viewBox="0 0 20 20" aria-hidden="true"
								><polygon points={STAR} fill={n <= r.stars ? 'var(--color-primary)' : 'transparent'} stroke="var(--color-ink)" stroke-width="1.6" stroke-linejoin="round" /></svg
							>
						{/each}
					</span>
					<p class="mt-1 font-display text-[1.45rem] leading-[1.02] font-extrabold uppercase">“{r.quote}”</p>
					<p class="mt-1 text-[0.8rem] font-bold tracking-[0.04em] uppercase">{r.who}</p>
				</li>
			{/each}
		</ul>
		<p class="mt-1 border-t-4 border-ink pt-1 text-[0.8rem] leading-snug">
			*Reviews are not real. Neither are the products. The losses are real.
		</p>
	</section>

	<!-- SELF-HELP SPECIALS -->
	<section class="lg:col-span-12" aria-labelledby="specials-title">
		<div class="mt-5 flex items-end justify-between gap-3 border-b-4 border-ink pb-1">
			<h2 id="specials-title" class="font-display text-[2.6rem] leading-[0.9] font-black uppercase lg:text-5xl">
				Self-help specials
			</h2>
			<p class="hidden text-sm font-bold uppercase sm:block">Limit one rematch per customer</p>
		</div>
		<ul class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
			{#each products as p, i (p.id)}
				<li
					class="product relative flex gap-3 border-2 border-ink p-2.5 sm:flex-col lg:p-3
						{p.recalled ? 'recalled bg-ink text-newsprint' : 'bg-white/60'}"
				>
					{#if p.tag}
						<span
							class="absolute -top-2.5 right-2 z-10 px-1.5 py-0.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase
								{p.recalled ? 'bg-secondary text-ink' : 'bg-accent text-accent-content'}">{p.tag}</span
						>
					{/if}
					<ProductCut
						cut={p.cut}
						label={p.name}
						class="block w-[42%] shrink-0 self-start border-2 sm:w-full {p.recalled ? 'border-secondary bg-newsprint' : 'border-ink bg-base-200'}"
					/>
					<div class="flex min-w-0 flex-1 flex-col">
						<span
							class="font-display text-[2.6rem] leading-[0.85] font-black whitespace-nowrap tabular-nums sm:text-[3.2rem]
								{p.recalled ? 'text-secondary' : 'text-primary'}"
							>{#if p.price[0].startsWith('−')}−{/if}<span class="align-top text-[0.4em]">$</span>{p.price[0].replace('−', '')}<span class="align-top text-[0.4em]">{p.price[1]}</span
							>{#if p.unit}<span class="ml-1.5 align-top text-[0.8rem] leading-none font-bold tracking-[0.04em] uppercase"
									>{p.unit}</span
								>{/if}</span
						>
						<h3 class="mt-2 font-display text-[1.45rem] leading-none font-extrabold uppercase">{p.name}</h3>
						<p class="mt-1 text-[0.88rem] leading-snug">{p.line}</p>
						<span class="mt-auto pt-3">
							<button id="buy-{p.id}" type="button" class="buy-btn bg-secondary text-[1.15rem]" onclick={() => toggle(p.id, true)}>
								Add to cart
							</button>
						</span>
					</div>

					{#if checked[p.id]}
						<div
							class="rain-check absolute inset-0 z-20 flex border-[3px] border-dashed border-ink bg-base-200 p-1.5 text-ink"
							role="status"
						>
							<div class="flex flex-1 flex-col border-2 border-ink bg-newsprint p-3">
								<span class="flex items-baseline justify-between gap-2 border-b-2 border-ink pb-1">
									<span class="font-display text-[2rem] leading-none font-black text-primary uppercase">Rain check</span>
									<span class="text-[0.75rem] font-bold tracking-[0.06em] uppercase tabular-nums"
										>No. {String(i + 2).padStart(4, '0')}</span
									>
								</span>
								<span class="mt-2 font-display text-[1.15rem] leading-none font-extrabold uppercase">{p.name}</span>
								<span class="mt-1 text-[0.92rem] leading-snug">Out of stock. {p.rainCheck}</span>
								<span class="mt-1 text-[0.75rem] font-bold tracking-[0.06em] uppercase">Valid never · no substitutions</span>
								<button
									id="rc-{p.id}-close"
									type="button"
									class="buy-btn mt-auto self-start bg-newsprint text-[1.15rem]"
									onclick={() => toggle(p.id, false)}
								>
									Put it back
								</button>
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<!-- IMPORTED GOODS: real links that leave the store -->
	<section class="mt-3 border-[3px] border-ink bg-ink text-newsprint lg:col-span-12" aria-labelledby="imported-title">
		<div class="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-newsprint/30 px-3 py-2.5 lg:px-4">
			<h2 id="imported-title" class="font-display text-[2.4rem] leading-none font-black uppercase lg:text-5xl">Imported goods</h2>
			<p class="bg-secondary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.06em] text-ink uppercase">
				Real turkey links · we checked
			</p>
		</div>
		<ul class="grid sm:grid-cols-2 lg:grid-cols-5">
			{#each realLinks as l, i (l.id)}
				<li
					class="border-newsprint/30 {i > 0 ? 'border-t-2' : ''} sm:border-t-0 {i % 2 === 1 ? 'sm:border-l-2' : ''} {i >= 2
						? 'sm:border-t-2'
						: ''} lg:border-t-0 {i > 0 ? 'lg:border-l-2' : 'lg:border-l-0'}"
				>
					<a
						href={l.href}
						target="_blank"
						rel="noopener noreferrer"
						class="import group flex h-full flex-col px-3 py-3 no-underline transition-colors duration-150 hover:bg-secondary hover:text-ink lg:px-4"
					>
						<span class="text-[0.75rem] font-bold tracking-[0.06em] text-secondary uppercase group-hover:text-ink">{l.source}</span>
						<span class="mt-1 flex items-start justify-between gap-2 font-display text-[1.45rem] leading-none font-extrabold uppercase">
							<span class="underline decoration-2 decoration-secondary underline-offset-4 group-hover:decoration-ink">{l.title}</span>
							<svg class="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"
								><path d="M8 16 18 6M9 6h9v9" stroke-linecap="square" /></svg
							>
						</span>
						<span class="mt-1.5 text-[0.88rem] leading-snug">{l.line}</span>
						<span class="sr-only">(opens in a new tab)</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<!-- CLOSE: practice where it counts -->
	<a
		href="/games/turkey-hunt"
		class="dept group mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-2 border-dashed border-ink bg-base-200 p-3 no-underline transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-secondary lg:col-span-12"
	>
		<span class="font-display text-[2rem] leading-none font-black uppercase">Still losing? Practice on Turkey Hunt</span>
		<span class="flex items-center gap-2 text-[0.92rem]">
			Free with every loss. Aisle 3.
			<svg class="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"
				><path d="M5 12h13M13 6l6 6-6 6" stroke-linecap="square" /></svg
			>
		</span>
	</a>
</div>

<style>
	:global(.kit-burst) {
		transform: rotate(-8deg);
	}

	.buy-btn {
		display: inline-flex;
		min-height: 44px;
		align-items: center;
		gap: 0.5rem;
		justify-content: center;
		border: 2px solid var(--color-ink);
		padding: 0.4rem 1rem;
		color: var(--color-ink);
		font-family: var(--font-display);
		font-weight: 900;
		line-height: 1;
		text-transform: uppercase;
		cursor: pointer;
		transition:
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.buy-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 22px -10px rgb(22 18 16 / 0.5);
	}

	.recalled {
		background-image: repeating-linear-gradient(-45deg, transparent 0 14px, rgb(255 212 0 / 0.08) 14px 28px);
	}
	.recalled .buy-btn {
		border-color: var(--color-secondary);
	}

	.import:focus-visible {
		outline-color: var(--color-secondary);
		outline-offset: -4px;
	}

	@media (prefers-reduced-motion: reduce) {
		.buy-btn {
			transition: none;
		}
		.buy-btn:hover {
			transform: none;
		}
	}
</style>
