<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		points?: number;
		depth?: number;
		fill?: string;
		stroke?: string;
		class?: string;
		children?: Snippet;
	};

	let {
		points = 22,
		depth = 0.16,
		fill = 'var(--color-secondary)',
		stroke = 'var(--color-ink)',
		class: className = '',
		children
	}: Props = $props();

	const polygon = $derived.by(() => {
		const out: string[] = [];
		const n = points * 2;
		for (let i = 0; i < n; i++) {
			const r = i % 2 === 0 ? 50 : 50 * (1 - depth);
			const a = (Math.PI * 2 * i) / n - Math.PI / 2;
			out.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
		}
		return out.join(' ');
	});
</script>

<div class="grid place-items-center {className.includes('absolute') ? '' : 'relative'} {className}">
	<svg class="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
		<polygon points={polygon} {fill} {stroke} stroke-width="1.6" stroke-linejoin="round" />
	</svg>
	<div class="relative text-center">{@render children?.()}</div>
</div>
