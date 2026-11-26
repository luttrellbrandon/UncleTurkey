<script lang="ts">
	import { goto } from '$app/navigation';
	import Starburst from '#lib/ui/Starburst.svelte';
	import PlaceholderTurkey from '#lib/ui/PlaceholderTurkey.svelte';
	import {
		doorbuster,
		huntCoupon,
		specials,
		rivalryAisles,
		nutrition,
		departments
	} from '#lib/content/weekly-ad';

	let clipped = $state(false);

	function clipCoupon(event: MouseEvent) {
		// Let new-tab / modified clicks behave like a normal link.
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
		event.preventDefault();
		if (clipped) return;
		clipped = true;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		setTimeout(() => goto(huntCoupon.href), reduced ? 500 : 1100);
	}

	const fmt = (n: number) => (n > 0 ? `${n}` : `−${Math.abs(n)}`);
</script>

<svelte:head>
	<title>Uncle Turkey · This Week's Doorbuster</title>
	<meta
		name="description"
		content="Whole Uncle Turkey, 69¢/lb. Clip the coupon and play Turkey Hunt. Thanksgiving week only."
	/>
</svelte:head>

<div class="border-b-2 border-ink bg-ink text-secondary">
	<p
		class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-1.5 text-[0.8rem] font-bold tracking-[0.08em] uppercase"
	>
		<span><span class="mr-2 bg-secondary px-1.5 py-0.5 text-ink">Weekly Ad</span>Prices good Thanksgiving week only</span>
		<span class="hidden sm:inline">While he lasts · no rain checks</span>
	</p>
</div>

<div class="ad mx-auto grid max-w-6xl overflow-x-clip gap-3 px-3 pt-3 sm:px-4 lg:grid-cols-12 lg:gap-4 lg:pt-5">
	<!-- DOORBUSTER: billed 3× everything else -->
	<section
		class="doorbuster relative border-[3px] border-ink bg-primary px-4 pt-2.5 pb-4 text-primary-content lg:col-span-7 lg:row-span-2 lg:px-8 lg:pt-6 lg:pb-8"
		aria-labelledby="doorbuster-title"
	>
		<p class="shout font-script text-[2.2rem] leading-none text-secondary lg:text-[3.6rem]">
			{doorbuster.shout}
		</p>
		<h1
			id="doorbuster-title"
			class="relative z-10 mt-1 font-display text-[clamp(4.25rem,18vw,6rem)] leading-[0.82] font-black tracking-[-0.02em] uppercase"
		>
			{#each doorbuster.title as word, i (i)}<span class="block">{word}</span>{/each}
		</h1>

		<Starburst
			class="burst absolute top-[5.5rem] -right-3.5 z-20 aspect-square w-[9.75rem] text-ink sm:w-[12rem] lg:top-[4.5rem] lg:-right-2 lg:w-[16rem]"
		>
			<span class="block font-display text-[4.2rem] leading-[0.8] font-black lg:text-[7rem]"
				>{doorbuster.price.whole}<span class="align-top text-[0.45em]">{doorbuster.price.cents}</span></span
			>
			<span class="block text-[0.9rem] font-bold tracking-[0.06em] uppercase lg:text-xl">{doorbuster.price.unit}</span>
		</Starburst>

		<div class="mt-4 flex items-end gap-3 lg:mt-8 lg:gap-6">
			<figure class="w-[48%] max-w-[16rem] shrink-0 border-[3px] border-dashed border-secondary bg-newsprint p-1.5">
				<PlaceholderTurkey class="block h-auto w-full" />
				<figcaption class="px-1 pt-1 pb-0.5 text-center text-[0.75rem] leading-tight font-bold text-ink uppercase">
					Actual turkey may vary
				</figcaption>
			</figure>
			<div class="min-w-0 flex-1">
				<p class="text-sm leading-tight font-bold uppercase line-through decoration-2 lg:text-base">
					{#each doorbuster.wasPrice as part, i (i)}<span class="block">{part}</span>{/each}
				</p>
				<p class="mt-2 max-w-[40ch] text-[0.88rem] leading-snug lg:text-base">{doorbuster.finePrint}</p>
			</div>
		</div>
	</section>

	<!-- PRIMARY ACTION: the clippable coupon. The dashed cut line stays; the coupon tears out of it. -->
	<a
		href={huntCoupon.href}
		onclick={clipCoupon}
		class="coupon group relative block border-[3px] border-dashed border-ink bg-base-200 p-1 text-secondary-content no-underline lg:col-span-5"
		class:clipped
		aria-describedby="coupon-terms"
	>
		<span class="coupon-body relative flex h-full items-stretch gap-3 border-2 border-ink bg-secondary px-3 py-3 lg:px-6 lg:py-6">
			<span class="flex flex-1 flex-col justify-between">
				<span class="block font-display text-[2.6rem] leading-[0.88] font-black uppercase lg:text-[4.6rem]"
					>{huntCoupon.title}</span
				>
				<span id="coupon-terms" class="mt-2 block text-[0.8rem] font-bold tracking-[0.04em] uppercase"
					>{huntCoupon.terms}<span class="block">{huntCoupon.expires}</span></span
				>
			</span>
			<span class="flex w-[6.5rem] flex-col items-center justify-center border-l-2 border-dashed border-ink pl-3 text-center">
				<svg class="scissors h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
					<circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
					<path d="M8.1 8.1 20 20M8.1 15.9 20 4" stroke-linecap="round" />
				</svg>
				<span class="mt-1 font-display text-xl leading-none font-black uppercase">Clip<br />&amp; play</span>
			</span>

			<span class="stamp pointer-events-none absolute inset-0 grid place-items-center" aria-hidden={!clipped}>
				<span class="stamp-ink border-4 border-primary bg-newsprint/95 px-4 py-2 text-center text-primary">
					<span class="block font-display text-4xl leading-none font-black uppercase">Redeemed</span>
					<span class="mt-1 block max-w-[24ch] text-sm leading-tight font-bold text-ink">{huntCoupon.reveal}</span>
				</span>
			</span>
		</span>
	</a>

	<!-- NUTRITION FACTS (desktop: beside the coupon) -->
	<section
		class="nutrition order-last border-[3px] border-ink bg-newsprint p-3 lg:order-none lg:col-span-5"
		aria-labelledby="nutrition-title"
	>
		<h2 id="nutrition-title" class="font-display text-[2.4rem] leading-none font-black">Nutrition Facts</h2>
		<p class="mt-1 border-b-[6px] border-ink pb-1 text-sm">
			Serving size <b>{nutrition.serving}</b> · Servings per family <b>{nutrition.servingsPer}</b>
		</p>
		<p class="flex items-end justify-between border-b-4 border-ink py-1">
			<b class="font-display text-[1.7rem] leading-none font-black">Calories</b>
			<b class="font-display text-[2.2rem] leading-none font-black tabular-nums">{nutrition.calories}</b>
		</p>
		<p class="border-b border-ink py-0.5 text-right text-[0.8rem] font-bold">% Daily Value*</p>
		<dl class="text-[0.95rem]">
			{#each nutrition.rows as row (row.label)}
				<div class="flex justify-between border-b border-ink py-1">
					<dt class:font-bold={row.bold}>{row.label}</dt>
					<dd class="font-bold tabular-nums">{row.value}</dd>
				</div>
			{/each}
		</dl>
		<p class="mt-2 border-t-4 border-ink pt-1 text-[0.8rem] leading-snug">{nutrition.footnote}</p>
		<p class="mt-2 text-[0.82rem] leading-snug">
			<b>Ingredients:</b>
			{nutrition.ingredients}
		</p>
	</section>

	<!-- THIS WEEK'S SPECIALS: the Hunt Targets, priced at their point values -->
	<section class="lg:col-span-12" aria-labelledby="specials-title">
		<div class="mt-5 flex items-end justify-between gap-3 border-b-4 border-ink pb-1">
			<h2 id="specials-title" class="font-display text-[2.6rem] leading-[0.9] font-black uppercase lg:text-5xl">
				Turkey Hunt specials
			</h2>
			<p class="hidden text-sm font-bold uppercase sm:block">Points per hit · limit 3 Shots per bird</p>
		</div>
		<ul class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
			{#each specials as s (s.id)}
				<li
					class="special relative flex flex-col border-2 border-ink p-2.5 lg:p-3
						{s.points < 0 ? 'recalled bg-ink text-newsprint' : 'bg-white/60'}"
				>
					{#if s.tag}
						<span
							class="absolute -top-2.5 right-2 px-1.5 py-0.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase
								{s.points < 0 ? 'bg-secondary text-ink' : 'bg-accent text-accent-content'}">{s.tag}</span
						>
					{/if}
					<span
						class="font-display text-[3.2rem] leading-[0.85] font-black whitespace-nowrap tabular-nums
							{s.points < 0 ? 'text-secondary' : s.points >= 400 ? 'text-accent' : 'text-primary'}"
						>{fmt(s.points)}<span class="ml-1 align-top text-[0.95rem] leading-none font-bold tracking-[0.04em]">{s.unit}</span></span
					>
					<span class="mt-2 font-display text-[1.45rem] leading-none font-extrabold uppercase">{s.name}</span>
					<span class="mt-1 text-[0.88rem] leading-snug">{s.line}</span>
				</li>
			{/each}
			<li class="flex flex-col justify-center border-2 border-dashed border-ink p-2.5 sm:hidden">
				<span class="font-script text-3xl leading-none text-primary">Shop early!</span>
				<span class="mt-1 text-[0.88rem] leading-snug">Every bird gets limited Shots. Miss too many and it flies off.</span>
			</li>
		</ul>
	</section>

	<!-- RIVALRY AISLES: Level scenery -->
	<section class="mt-4 lg:col-span-12" aria-labelledby="rivalry-title">
		<div class="border-[3px] border-ink bg-accent text-accent-content">
			<div class="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink px-3 py-2">
				<h2 id="rivalry-title" class="font-display text-3xl leading-none font-black uppercase lg:text-4xl">
					Department of Grudges
				</h2>
				<p class="text-sm font-bold uppercase">Six Levels · three Rivalries · one turkey</p>
			</div>
			<ul class="grid sm:grid-cols-3">
				{#each rivalryAisles as r, i (r.id)}
					<li class="relative px-3 pt-4 pb-3 {i > 0 ? 'border-t-2 border-ink sm:border-t-0 sm:border-l-2' : ''}">
						<span class="flex items-start justify-between gap-2">
							<span class="font-display text-[2rem] leading-none font-black uppercase">{r.sport}</span>
							<span class="shrink-0 bg-secondary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.06em] text-ink uppercase">{r.levels}</span>
						</span>
						<span class="mt-1 block text-[0.92rem]">{r.line}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- DEPARTMENTS: the rest of the site, as aisle coupons -->
	<nav class="mt-4 pb-4 lg:col-span-12" aria-label="Departments">
		<ul class="grid gap-2 sm:grid-cols-3 lg:gap-3">
			{#each departments as d (d.href)}
				<li>
					<a
						href={d.href}
						class="dept group flex h-full flex-col border-2 border-dashed border-ink bg-base-200 p-3 no-underline transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-secondary"
					>
						<span class="flex items-center justify-between gap-2 font-display text-[2rem] leading-none font-black uppercase">
							{d.title}
							<span class="ml-auto shrink-0 border-2 border-ink bg-newsprint px-1.5 py-0.5 font-sans text-[0.75rem] font-bold tracking-[0.06em]">{d.aisle}</span>
							<svg class="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"
								><path d="M5 12h13M13 6l6 6-6 6" stroke-linecap="square" /></svg
							>
						</span>
						<span class="mt-1 text-[0.92rem] leading-snug">{d.line}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	/* One authored moment: the price burst slams onto the page. */
	:global(.burst) {
		animation: slam 700ms cubic-bezier(0.16, 1, 0.3, 1) 150ms both;
	}
	@keyframes slam {
		from {
			transform: rotate(-24deg) scale(1.25);
		}
		to {
			transform: rotate(-8deg) scale(1);
		}
	}
	:global(.burst) {
		transform: rotate(-8deg);
	}

	.coupon-body {
		transition:
			transform 260ms cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 260ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.coupon:hover .coupon-body {
		transform: translate(-2px, -3px) rotate(-0.8deg);
		box-shadow: 0 12px 22px -10px rgb(22 18 16 / 0.5);
	}
	.coupon:hover .scissors {
		animation: snip 420ms ease-in-out infinite alternate;
	}
	@keyframes snip {
		to {
			transform: rotate(-14deg);
		}
	}
	/* The torn-out hole the coupon leaves behind. */
	.coupon {
		background-image: repeating-linear-gradient(
			45deg,
			transparent 0 8px,
			rgb(22 18 16 / 0.18) 8px 10px
		);
	}
	.coupon.clipped .coupon-body {
		transform: translate(18px, 30px) rotate(-6deg);
		box-shadow: 0 22px 34px -14px rgb(22 18 16 / 0.6);
	}
	.stamp {
		opacity: 0;
	}
	.stamp-ink {
		transform: rotate(-6deg) scale(1.6);
		transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1) 120ms;
	}
	.coupon.clipped .stamp {
		opacity: 1;
		transition: opacity 120ms linear 120ms;
	}
	.coupon.clipped .stamp-ink {
		transform: rotate(-6deg) scale(1);
	}

	.recalled {
		background-image: repeating-linear-gradient(
			-45deg,
			transparent 0 14px,
			rgb(255 212 0 / 0.08) 14px 28px
		);
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.burst),
		.coupon:hover .scissors {
			animation: none;
		}
		.coupon-body,
		.stamp,
		.stamp-ink {
			transition: none;
		}
		.coupon.clipped .coupon-body {
			transform: none;
		}
	}
</style>
