<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import { BULK_BONUS, BULK_STREAK, TARGETS } from './levels';
	import type { HuntHud, TurkeyHuntController } from './types';

	let hud = $state<HuntHud | null>(null);
	let controller = $state<TurkeyHuntController | null>(null);
	let aspect = $state('3 / 4');
	let displayName = $state('');
	let saving = $state(false);
	let saveMessage = $state('');

	const runTotal = $derived(hud ? hud.banked + hud.levelScore : 0);
	const quotaPct = $derived(hud ? Math.max(0, Math.min(100, (hud.levelScore / hud.quota) * 100)) : 0);
	const clock = $derived(hud ? `0:${String(hud.timeLeft).padStart(2, '0')}` : '0:00');

	const mountHunt: Attachment<HTMLDivElement> = (node) => {
		let current: TurkeyHuntController | null = null;
		let cancelled = false;

		void Promise.all([
			import('./mount-turkey-hunt'),
			document.fonts?.load('900 40px "Big Shoulders Display"').catch(() => null)
		]).then(([{ mountTurkeyHunt, huntWorldSize }]) => {
			if (cancelled) return;
			const size = huntWorldSize(node.clientWidth);
			aspect = `${size.width} / ${size.height}`;
			current = mountTurkeyHunt(node, (next) => {
				hud = next;
			});
			controller = current;
		});

		return () => {
			cancelled = true;
			current?.destroy();
			controller = null;
		};
	};

	const focusOnMount: Attachment<HTMLElement> = (node) => {
		node.focus({ preventScroll: true });
	};

	async function saveScore() {
		if (hud?.submitScore == null || saving) return;
		saving = true;
		saveMessage = '';
		try {
			const response = await fetch('/api/games/turkey-hunt/scores', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					score: hud.submitScore,
					displayName: displayName.trim() || null
				})
			});
			const body = (await response.json().catch(() => null)) as { message?: string } | null;
			saveMessage = response.ok
				? `Saved ${hud.submitScore} points. Uncle Turkey has been notified.`
				: (body?.message ?? 'The register jammed. Try saving again.');
		} catch {
			saveMessage = 'The register jammed. Try saving again.';
		} finally {
			saving = false;
		}
	}

	const priceList = Object.values(TARGETS);
</script>

<div class="flex flex-col gap-3">
	<!-- THE MONITOR -->
	<section class="bezel border-[3px] border-ink bg-ink p-1.5 text-secondary sm:p-2.5" aria-label="Turkey Hunt security monitor">
		<div class="flex items-center justify-between gap-3 px-1 pb-1.5 font-display text-[1.35rem] leading-none font-extrabold uppercase sm:text-2xl">
			<span>{hud?.cam ?? 'Cam 1 · Rec room'}</span>
			<span class="flex items-center gap-2 tabular-nums">
				<span class="inline-block h-3 w-3 rounded-full bg-primary" aria-hidden="true"></span>
				<span class="sr-only">Time left</span>Rec {clock}
			</span>
		</div>

		<div class="relative w-full overflow-hidden border-2 border-ink bg-base-200" style:aspect-ratio={aspect}>
			<div
				{@attach mountHunt}
				class="absolute inset-0 touch-none select-none"
				role="application"
				aria-label="Turkey Hunt playfield. Tap or click the turkeys."
			></div>

			{#if !hud}
				<p class="absolute inset-0 grid place-items-center font-display text-3xl font-black text-ink uppercase">
					Rewinding the tape…
				</p>
			{:else}
				<!-- Camera overlay plates -->
				<div class="pointer-events-none absolute top-2 left-2 bg-ink/80 px-2 py-1 font-display text-lg leading-none font-extrabold uppercase sm:text-xl">
					Lvl {hud.levelIndex + 1}/{hud.levelCount} · {hud.rivalry}
				</div>
				{#if hud.streak > 0 && hud.status === 'playing'}
					<div class="pointer-events-none absolute top-2 right-2 bg-accent px-2 py-1 font-display text-lg leading-none font-extrabold text-accent-content uppercase sm:text-xl">
						{hud.streak % BULK_STREAK || BULK_STREAK}/{BULK_STREAK} in a row
					</div>
				{/if}
				<div class="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 bg-ink/80 px-2 py-1.5" aria-label="Fly-offs {hud.flyOffs} of {hud.maxFlyOffs}">
					<span class="font-display text-base leading-none font-extrabold uppercase">Got away</span>
					{#each Array(hud.maxFlyOffs) as _, i (i)}
						<span class="h-3 w-3 border-2 border-secondary {i < hud.flyOffs ? 'bg-primary' : ''}" aria-hidden="true"></span>
					{/each}
				</div>
				<div class="pointer-events-none absolute right-2 bottom-2 w-[46%] max-w-[15rem] bg-ink/80 px-2 py-1.5">
					<div class="flex items-baseline justify-between font-display leading-none font-extrabold uppercase">
						<span class="text-base">Quota</span>
						<span class="text-xl tabular-nums">{hud.levelScore}<span class="text-sm">/{hud.quota}</span></span>
					</div>
					<div class="mt-1 h-2 border border-secondary">
						<div class="h-full bg-secondary transition-[width] duration-300 ease-out" style:width="{quotaPct}%"></div>
					</div>
				</div>

				{#if hud.status !== 'playing'}
					<div class="absolute inset-0 grid place-items-center bg-ink/55 p-4">
						<div class="w-full max-w-sm border-[3px] border-ink bg-newsprint p-4 text-ink">
							{#if hud.status === 'failed'}
								<h2 class="font-display text-[2.6rem] leading-[0.9] font-black text-primary uppercase">Quota missed</h2>
								<p class="mt-2 text-[0.95rem] leading-snug">
									{hud.failReason === 'flyoff'
										? 'Three turkeys got away. This Level’s points are gone; cleared Levels stay cleared.'
										: 'Time ran out before the quota. This Level’s points are gone; cleared Levels stay cleared.'}
								</p>
								<button type="button" {@attach focusOnMount} class="hunt-btn mt-4" onclick={() => controller?.retry()}>
									Retry level {hud.levelIndex + 1}
								</button>
							{:else if hud.status === 'cleared'}
								<h2 class="font-display text-[2.6rem] leading-[0.9] font-black uppercase">Quota cleared</h2>
								<p class="mt-2 text-[0.95rem] leading-snug">
									{hud.levelScore} points banked. Run total {runTotal}. Next up: Level {hud.levelIndex + 2}.
								</p>
								<button type="button" {@attach focusOnMount} class="hunt-btn mt-4" onclick={() => controller?.next()}>
									Next level
								</button>
							{:else if hud.submitScore !== null}
								<h2 class="font-display text-[2.6rem] leading-[0.9] font-black uppercase">
									{hud.status === 'won' ? 'All six cleared' : 'Run over'}
								</h2>
								<p class="mt-1 font-display text-5xl leading-none font-black text-primary tabular-nums">{hud.submitScore}</p>
								<form
									class="mt-3 flex flex-col gap-2"
									onsubmit={(event) => {
										event.preventDefault();
										void saveScore();
									}}
								>
									<label class="flex flex-col gap-1">
										<span class="text-sm font-bold uppercase">Name for the board (optional)</span>
										<input
											class="border-2 border-ink bg-white px-2 py-1.5 text-base focus:border-ink focus:ring-0"
											maxlength="32"
											bind:value={displayName}
											autocomplete="nickname"
											{@attach focusOnMount}
										/>
									</label>
									<div class="flex flex-wrap gap-2">
										<button type="submit" class="hunt-btn" disabled={saving}>{saving ? 'Saving…' : 'Save high score'}</button>
										<button type="button" class="hunt-btn hunt-btn-quiet" onclick={() => controller?.restart()}>Play again</button>
									</div>
									{#if saveMessage}
										<p class="text-sm font-bold" role="status">{saveMessage}</p>
									{/if}
								</form>
							{/if}
						</div>
					</div>
				{/if}
			{/if}
		</div>

		<div class="flex items-center justify-between gap-3 px-1 pt-1.5 font-display text-lg leading-none font-extrabold uppercase">
			<span class="tabular-nums">Run {runTotal}</span>
			{#if hud && hud.status !== 'won' && hud.status !== 'quit'}
				<button
					type="button"
					class="min-h-11 border-2 border-secondary px-3 py-2 uppercase hover:bg-secondary hover:text-ink"
					onclick={() => controller?.quit()}
				>
					Quit &amp; save
				</button>
			{/if}
		</div>
	</section>

	<!-- THE WALKIE -->
	<div class="flex min-h-[4.5rem] items-start gap-3 border-[3px] border-ink bg-secondary p-2.5" role="status" aria-live="polite">
		<span
			class="shrink-0 px-1.5 py-1 font-display text-base leading-none font-black uppercase
				{hud?.taunt?.speaker === 'MGR' ? 'bg-ink text-secondary' : 'bg-primary text-primary-content'}"
		>
			{hud?.taunt?.speaker === 'MGR' ? 'Mgr' : 'Uncle T'}
		</span>
		{#key hud?.taunt?.id}
			<p class="walkie-line font-display text-[1.5rem] leading-[1.02] font-extrabold uppercase">
				“{hud?.taunt?.line ?? 'Testing, testing. Is this thing on? Is the turkey on?'}”
			</p>
		{/key}
	</div>

	<!-- PRICE CHECK -->
	<section aria-labelledby="price-check" class="border-[3px] border-ink bg-newsprint p-3">
		<h2 id="price-check" class="font-display text-3xl leading-none font-black uppercase">Price check</h2>
		<ul class="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-5">
			{#each priceList as t (t.id)}
				<li class="flex items-baseline justify-between gap-2 border-b border-ink py-1">
					<span class="font-display text-lg font-extrabold uppercase">{t.id === 'brandon' ? 'Brandon' : t.tag}</span>
					<span class="font-display text-xl font-black tabular-nums {t.points < 0 ? 'text-error' : ''}"
						>{t.points > 0 ? '+' : '−'}{Math.abs(t.points)}</span
					>
				</li>
			{/each}
		</ul>
		<p class="mt-3 max-w-[65ch] text-[0.92rem] leading-snug">
			Tap or click turkeys as they rise. Each bird has three Shots (the holes on its tag), and a wasted
			Shot only counts when you were close. Three in a row earns a Bulk Discount of +{BULK_BONUS}. Let
			three get away, or run out the clock, and you retry the Level. Do not shoot Brandon.
		</p>
	</section>
</div>

<style>
	.hunt-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--color-ink);
		background: var(--color-secondary);
		color: var(--color-ink);
		padding: 0.5rem 1rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 900;
		line-height: 1;
		text-transform: uppercase;
		transition:
			transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.hunt-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 22px -10px rgb(22 18 16 / 0.5);
	}
	.hunt-btn:disabled {
		opacity: 0.55;
		transform: none;
		box-shadow: none;
	}
	.hunt-btn-quiet {
		background: var(--color-newsprint);
	}
	.walkie-line {
		text-wrap: balance;
	}
	@media (prefers-reduced-motion: reduce) {
		.hunt-btn {
			transition: none;
		}
	}
</style>
