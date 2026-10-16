<script lang="ts">
	import './layout.css';
	import '#lib/ui/turkey-cursor.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a href="/">Uncle Turkey</a>
	<nav>
		<a href="/">Home</a>
		<a href="/origin">Origin</a>
		<a href="/games">Games</a>
		<a href="/links">Links</a>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>Uncle Turkey — gobble responsibly.</p>
</footer>
