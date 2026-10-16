<script>
	import { originChapters, originIntro } from '#lib/content/origin';
</script>

<article>
	<h1>Origin Story</h1>
	<p>{originIntro}</p>

	{#each originChapters as chapter (chapter.id)}
		<section>
			<h2>{chapter.title}</h2>
			<p>{chapter.body}</p>
		</section>
	{/each}
</article>
