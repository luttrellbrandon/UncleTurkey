# Origin Story and link lists as content under `src/lib/content`

The site needs editable Origin Story copy and turkey-store / costume link lists without a CMS. We considered hard-coding everything in Svelte routes, CMS placeholders, and content modules under `src/lib/content` rendered by thin routes. We chose `src/lib/content` so gag copy and link lists stay easy to edit while routes stay responsible for presentation.
