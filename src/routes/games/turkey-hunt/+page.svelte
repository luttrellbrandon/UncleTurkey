<script lang="ts">
	import TurkeyHuntGame from '#lib/games/turkey-hunt/TurkeyHuntGame.svelte';
</script>

<svelte:head>
	<title>Turkey Hunt · Uncle Turkey Market</title>
	<meta
		name="description"
		content="Uncle Turkey is loose on camera. Shoot turkeys, roast his ping pong, fishing and racquetball, and post a High Score."
	/>
</svelte:head>

<article class="mx-auto max-w-5xl px-2 pt-3 pb-6 sm:px-4 sm:pt-5">
	<div class="mb-2 flex items-end justify-between gap-3 px-1">
		<h1 class="font-display text-[2.6rem] leading-[0.85] font-black uppercase sm:text-6xl">Turkey Hunt</h1>
		<span class="mb-1 shrink-0 border-2 border-ink bg-newsprint px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.06em] uppercase"
			>Aisle 3 · Security</span
		>
	</div>
	<TurkeyHuntGame />
</article>
