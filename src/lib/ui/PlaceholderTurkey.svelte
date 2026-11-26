<script lang="ts">
	/**
	 * Stand-in "store photo" until the real Uncle Turkey portrait Turkey Asset exists.
	 * A generic cartoon bird with an empty face sticker — never a likeness.
	 */
	type Props = { label?: string; class?: string };
	let { label = 'Photo pending', class: className = '' }: Props = $props();

	const feathers = [
		{ r: -62, c: '#b3121b' },
		{ r: -42, c: '#ffd400' },
		{ r: -21, c: '#e3171e' },
		{ r: 0, c: '#f08a1c' },
		{ r: 21, c: '#e3171e' },
		{ r: 42, c: '#ffd400' },
		{ r: 62, c: '#b3121b' }
	];
</script>

<svg viewBox="0 0 200 200" class={className} role="img" aria-label="Placeholder turkey: real Uncle Turkey photo coming soon">
	<g stroke="#161210" stroke-width="3" stroke-linejoin="round">
		{#each feathers as f (f.r)}
			<path
				d="M100 120 C 84 80, 86 26, 100 14 C 114 26, 116 80, 100 120 Z"
				fill={f.c}
				transform="rotate({f.r} 100 120)"
			/>
		{/each}
		<ellipse cx="100" cy="132" rx="46" ry="42" fill="#7a3b16" />
		<path d="M78 168 l-6 22 m6 -22 l2 22 M122 168 l6 22 m-6 -22 l-2 22" fill="none" stroke-linecap="round" />
		<circle cx="100" cy="92" r="30" fill="#fff4dc" stroke-dasharray="6 5" />
		<path d="M96 112 l8 0 l-4 10 z" fill="#ffd400" />
		<path d="M108 112 c 8 4, 8 16, 2 22 c -4 -6, -4 -14, -2 -22 z" fill="#e3171e" />
	</g>
	<text
		x="100"
		y="88"
		text-anchor="middle"
		font-family="Archivo Narrow, sans-serif"
		font-weight="700"
		font-size="9.5"
		fill="#161210"
		letter-spacing=".04em">FACE</text
	>
	<text
		x="100"
		y="100"
		text-anchor="middle"
		font-family="Archivo Narrow, sans-serif"
		font-weight="700"
		font-size="9.5"
		fill="#161210"
		letter-spacing=".04em">PENDING</text
	>
	<title>{label}</title>
</svg>
