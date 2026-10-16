<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/origin', label: 'Origin Story' },
		{ href: '/games', label: 'Games' },
		{ href: '/links', label: 'Turkey Links' }
	] as const;

	const pathname = $derived(page.url.pathname);

	function isActive(href: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="navbar sticky top-0 z-50 border-b border-base-300 bg-base-200 shadow-sm">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl font-bold">Uncle Turkey</a>
	</div>

	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class={{ 'menu-active': isActive(link.href) }}
						aria-current={isActive(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="navbar-end lg:hidden">
		<details class="dropdown dropdown-end">
			<summary class="btn btn-ghost btn-square" aria-label="Open menu">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</summary>
			<ul class="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							class={{ 'menu-active': isActive(link.href) }}
							aria-current={isActive(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</details>
	</div>
</header>
