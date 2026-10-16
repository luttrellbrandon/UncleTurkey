# Production branch main only; custom domain and D1 at go-live

We deploy Uncle Turkey with Cloudflare Workers Git integration. We considered PR preview deploys, shipping on workers.dev before the custom domain, and deferring D1. We chose production builds on `main` only, attaching `uncleturkey.com` at go-live, and creating/binding D1 with the first production deploy so High Scores and the public domain are ready together.
