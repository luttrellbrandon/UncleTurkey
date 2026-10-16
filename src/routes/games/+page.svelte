<script>
	import { games } from '#lib/content/games';
</script>

<article>
	<h1>Games Hub</h1>
	<p>Pick a Mini Game and gobble responsibly.</p>
	<ul>
		{#each games as game (game.id)}
			<li>
				<a href={game.href}>{game.title}</a>
				— {game.blurb}
			</li>
		{/each}
	</ul>
</article>
