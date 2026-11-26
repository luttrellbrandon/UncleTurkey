<script lang="ts">
	import './layout.css';
	import '#lib/ui/turkey-cursor.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import SiteHeader from '#lib/ui/SiteHeader.svelte';
	import SiteFooter from '#lib/ui/SiteFooter.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// The Weekly Ad and the Hunt own their width; other pages keep the reading column.
	const fullBleed = $derived(['/', '/games/turkey-hunt', '/origin', '/links'].includes(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SiteHeader />

<main class={fullBleed ? 'min-h-[70vh]' : 'mx-auto min-h-[70vh] max-w-5xl px-4 py-8'}>
	{@render children()}
</main>

<SiteFooter />
