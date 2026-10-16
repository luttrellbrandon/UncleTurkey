<script>
	import { turkeyLinks } from '#lib/content/turkey-links';
</script>

<article>
	<h1>Turkey Links</h1>
	<p>Curated outbound Turkey Links — costumes, stores, and festive nonsense.</p>
	<ul>
		{#each turkeyLinks as link (link.id)}
			<li>
				<a href={link.href} rel="noopener noreferrer" target="_blank">{link.title}</a>
				— {link.blurb}
			</li>
		{/each}
	</ul>
</article>
