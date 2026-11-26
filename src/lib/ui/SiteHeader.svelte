<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Weekly Ad', aisle: 'Front' },
		{ href: '/origin', label: 'Origin Story', aisle: 'Aisle 1' },
		// Only one Mini Game for now, so Games goes straight to it.
		{ href: '/games/turkey-hunt', label: 'Games', aisle: 'Aisle 3' }
	] as const;

	const pathname = $derived(page.url.pathname);

	function isActive(href: string): boolean {
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(`${href}/`);
	}
</script>

<header class="sticky top-0 z-50 border-b-4 border-secondary bg-primary text-primary-content">
	<nav class="navbar mx-auto min-h-0 max-w-6xl gap-3 px-4 py-2" aria-label="Main">
		<div class="navbar-start w-auto flex-1">
			<a
				href="/"
				class="font-display text-[1.75rem] leading-none whitespace-nowrap font-black tracking-[-0.01em] uppercase no-underline sm:text-[2.2rem]"
			>
				Uncle Turkey<span class="ml-1.5 align-middle text-[0.45em] tracking-[0.12em] text-secondary"
					>Market</span
				>
			</a>
		</div>

		<ul class="navbar-end hidden w-auto gap-1 lg:flex">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={isActive(link.href) ? 'page' : undefined}
						class="group flex border-2 px-3 py-1.5 leading-none no-underline transition-colors duration-150
							{isActive(link.href)
							? 'border-ink bg-secondary text-secondary-content'
							: 'border-transparent hover:border-secondary'}"
					>
						<span class="font-display text-xl font-extrabold uppercase">{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>

		<div class="navbar-end w-auto lg:hidden">
			<details class="dropdown dropdown-end">
				<summary
					class="flex cursor-pointer list-none items-center gap-2 border-2 border-secondary bg-secondary px-3 py-1.5 font-display text-lg font-extrabold text-secondary-content uppercase"
				>
					Aisles
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
						<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="square" />
					</svg>
				</summary>
				<ul class="dropdown-content z-50 mt-3 w-60 border-2 border-ink bg-base-100 p-1 text-base-content shadow-[0_10px_24px_-8px_rgb(22_18_16/0.45)]">
					{#each links as link (link.href)}
						<li>
							<a
								href={link.href}
								aria-current={isActive(link.href) ? 'page' : undefined}
								class="flex items-baseline justify-between border-b border-dashed border-base-300 px-3 py-2.5 no-underline last:border-0
									{isActive(link.href) ? 'bg-secondary' : 'hover:bg-base-200'}"
							>
								<span class="font-display text-xl font-extrabold uppercase">{link.label}</span>
								<span class="text-xs font-bold tracking-[0.08em] uppercase">{link.aisle}</span>
							</a>
						</li>
					{/each}
				</ul>
			</details>
		</div>
	</nav>
</header>
