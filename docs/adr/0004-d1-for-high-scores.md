# Cloudflare D1 for High Score persistence

High Scores need durable storage on Cloudflare alongside the SvelteKit app. We considered KV, deferring storage with a stub API, and D1. We chose D1 so ranked per–Mini Game High Scores and “top N” queries stay straightforward, accepting a small schema and migrations footprint in the repo.
