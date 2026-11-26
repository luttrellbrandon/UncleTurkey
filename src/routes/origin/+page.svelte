<script lang="ts">
	import ComicPanel from '#lib/ui/comic/ComicPanel.svelte';
	import {
		fishTales,
		originChapters,
		originDisclaimer,
		originIntro,
		originTitle,
		pingPongLog,
		racquetball
	} from '#lib/content/origin';

	const before = (id: string) => originChapters.findIndex((c: { id: string }) => c.id === id);
	const firstHalf = originChapters.slice(0, before('wizard'));
	const secondHalf = originChapters.slice(before('wizard'));
</script>

<svelte:head>
	<title>The Legend of Uncle Turkey · Sunday Funnies</title>
	<meta
		name="description"
		content="From Florida to SIU to a Vegas chapel: the true-ish origin story of Uncle Turkey, told in comic panels. Brandon is in it. Brandon is great in it."
	/>
</svelte:head>

{#snippet chapter(c: (typeof originChapters)[number], i: number)}
	{#if c.id === 'curve'}
		<!-- The Curve Breaker gets the splash panel: Brandon's shout breaks the border. -->
		<section class="chapter" aria-labelledby="ch-{c.id}">
			<div class="md:mr-[5%]">
			<ComicPanel
				scene={c.scene}
				label={c.title}
				caption={c.caption}
				bubbles={c.bubbles}
				sfx={c.sfx}
				sfxAt={{ x: 63, y: 58 }}
				breakout
			/>
			</div>
			<h2 id="ch-{c.id}" class="mt-2 font-display text-[2.4rem] leading-[0.9] font-black uppercase md:text-6xl">{c.title}</h2>
			<div class="grid gap-x-8 md:grid-cols-2">
				{#each c.body as para, j (j)}
					<p class="mt-3 max-w-[60ch] text-[1.05rem] leading-relaxed">{para}</p>
				{/each}
			</div>
		</section>
	{:else}
		<section class="chapter grid items-start gap-4 md:grid-cols-12 md:gap-8" aria-labelledby="ch-{c.id}">
			<div class="md:col-span-7 {i % 2 ? 'md:order-2' : ''}">
				<ComicPanel scene={c.scene} label={c.title} caption={c.caption} bubbles={c.bubbles} sfx={c.sfx} />
			</div>
			<div class="md:col-span-5 md:pt-6">
				<h2 id="ch-{c.id}" class="font-display text-[2.4rem] leading-[0.9] font-black uppercase md:text-5xl">{c.title}</h2>
				{#each c.body as para, j (j)}
					<p class="mt-3 max-w-[60ch] text-[1.05rem] leading-relaxed">{para}</p>
				{/each}
			</div>
		</section>
	{/if}
{/snippet}

{#snippet meme(text: string)}
	<p class="meme inline-block px-3 py-3 font-display text-[2rem] leading-[1] font-black text-secondary uppercase sm:text-[2.6rem]">{text}</p>
{/snippet}

<div class="funnies mx-auto max-w-6xl overflow-x-clip px-3 pt-4 pb-6 sm:px-4 lg:pt-6">
	<!-- Comic section masthead -->
	<header class="border-[3px] border-ink bg-primary px-4 pt-3 pb-5 text-primary-content lg:px-8 lg:pt-5 lg:pb-7">
		<div class="flex items-start justify-between gap-3">
			<p class="font-script text-[2.2rem] leading-none text-secondary lg:text-[3.2rem]">Sunday Funnies!</p>
			<span class="mt-1 shrink-0 bg-secondary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.06em] text-ink uppercase">Aisle 1 · Free</span>
		</div>
		<h1 class="mt-1 font-display text-[clamp(3.6rem,15vw,6rem)] leading-[0.84] font-black tracking-[-0.02em] uppercase">
			{originTitle}
		</h1>
		<p class="mt-4 max-w-[60ch] text-[1.05rem] leading-relaxed">{originIntro}</p>
		<p class="mt-2 max-w-[60ch] text-[0.88rem] leading-snug text-primary-content/90">{originDisclaimer}</p>
	</header>

	<div class="mt-8 flex flex-col gap-10 lg:gap-14">
		{#each firstHalf as c, i (c.id)}
			{@render chapter(c, i)}
		{/each}

		<!-- TALL TALES: the fishing feature -->
		<section aria-labelledby="fish-title" class="feature border-[3px] border-ink bg-accent p-3 text-accent-content sm:p-5">
			<div class="flex flex-wrap items-end justify-between gap-2">
				<h2 id="fish-title" class="font-display text-[2.4rem] leading-[0.9] font-black uppercase md:text-5xl">{fishTales.title}</h2>
				<span class="bg-secondary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.06em] text-ink uppercase">Seafood counter</span>
			</div>
			<p class="mt-2 max-w-[60ch] text-[1.05rem] leading-relaxed">{fishTales.intro}</p>
			<div class="mt-4 grid gap-4 text-ink md:grid-cols-12">
				<div class="md:col-span-7">
					<ComicPanel
						scene="fishing"
						label="Brandon hauls in a fish the size of the boat while Daniel reels in a boot"
						caption="Every. Single. Trip. Brandon: first one, most ones, biggest one."
						bubbles={[{ who: 'daniel', text: 'I got a bite! …It is a boot.' }]}
						sfx="Splash!"
					/>
				</div>
				<ul class="grid content-start gap-3 md:col-span-5">
					{#each fishTales.tales as t (t.stat)}
						<li class="border-2 border-ink bg-newsprint p-3">
							<div class="flex items-baseline justify-between gap-3 border-b-2 border-ink pb-1">
								<span class="font-display text-xl font-extrabold uppercase">{t.stat}</span>
								<span class="font-display text-[1.6rem] leading-none font-black text-primary">{t.value}</span>
							</div>
							<p class="mt-2 text-[0.98rem] leading-snug">{t.line}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-5 text-center">{@render meme('Brandon: 47 · Daniel: 1 boot')}</div>
		</section>

		{#each secondHalf as c, i (c.id)}
			{@render chapter(c, i + firstHalf.length)}
		{/each}

		<!-- TALL TALES: ping pong practice log -->
		<section aria-labelledby="pp-title" class="grid items-start gap-4 md:grid-cols-12 md:gap-8">
			<div class="md:col-span-6">
				<ComicPanel
					scene="practice"
					label="Daniel practices ping pong alone against the folded-up half of the table"
					caption="After hours. The office. Tok. Tok. Tok."
					bubbles={[{ who: 'daniel', text: 'One day. One day I beat him.' }]}
					sfx="Tok!"
				/>
			</div>
			<div class="md:col-span-6">
				<h2 id="pp-title" class="font-display text-[2.4rem] leading-[0.9] font-black uppercase md:text-5xl">{pingPongLog.title}</h2>
				<p class="mt-3 max-w-[60ch] text-[1.05rem] leading-relaxed">{pingPongLog.intro}</p>
				<dl class="mt-4 border-[3px] border-ink bg-white">
					{#each pingPongLog.entries as e (e.day)}
						<div class="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-dashed border-ink px-3 py-2 last:border-0">
							<dt class="font-display text-lg font-extrabold uppercase">{e.day}</dt>
							<dd class="text-[0.98rem] leading-snug">{e.note}</dd>
						</div>
					{/each}
				</dl>
				<div class="mt-4">{@render meme('Wins vs. Brandon: 0 · Hope: undefeated')}</div>
			</div>
		</section>

		<!-- TALL TALES: racquetball -->
		<section aria-labelledby="rb-title" class="grid items-start gap-4 md:grid-cols-12 md:gap-8">
			<div class="md:order-2 md:col-span-7">
				<ComicPanel
					scene="racquet"
					label="Daniel, in goggles, takes a racquetball straight to the face while Brandon watches"
					caption="Court 4. The third game. Allegedly a warm-up."
					bubbles={racquetball.bubbles}
					sfx="Bonk!"
				/>
			</div>
			<div class="md:col-span-5 md:pt-6">
				<h2 id="rb-title" class="font-display text-[2.4rem] leading-[0.9] font-black uppercase md:text-5xl">{racquetball.title}</h2>
				{#each racquetball.body as para, j (j)}
					<p class="mt-3 max-w-[60ch] text-[1.05rem] leading-relaxed">{para}</p>
				{/each}
				<div class="mt-4">{@render meme('The wall wins again')}</div>
			</div>
		</section>

		<!-- THE END (FOR NOW) -->
		<section class="border-[3px] border-ink bg-ink px-4 py-6 text-center text-newsprint sm:py-8" aria-labelledby="the-end">
			<p class="font-script text-[2.4rem] leading-none text-secondary">To be continued…</p>
			<h2 id="the-end" class="mt-1 font-display text-[3rem] leading-[0.9] font-black uppercase sm:text-6xl">The end (for now)</h2>
			<p class="mx-auto mt-3 max-w-[52ch] text-[1.05rem] leading-relaxed text-newsprint/90">
				Uncle Turkey is still out there, practicing his serve and checking the lake for one single fish. You can help. Or at least you can shoot at him.
			</p>
			<a
				href="/games/turkey-hunt"
				class="mt-5 inline-flex min-h-11 items-center border-[3px] border-dashed border-secondary bg-secondary px-5 py-2 font-display text-[1.6rem] font-black text-ink uppercase no-underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
			>
				Play Turkey Hunt
			</a>
		</section>
	</div>
</div>

<style>
	/* The Hunt's meme caption: yellow, heavy ink stroke, slightly tilted. */
	.meme {
		-webkit-text-stroke: 0.1em var(--color-ink);
		paint-order: stroke fill;
		rotate: -3deg;
		text-wrap: balance;
	}
</style>
