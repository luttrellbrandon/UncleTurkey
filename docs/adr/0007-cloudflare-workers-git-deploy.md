# Deploy via Cloudflare Workers Git integration

Production deploys need to run on commits to `main` from GitHub. We considered GitHub Actions with `wrangler deploy`, Cloudflare Pages Git integration, and Cloudflare Workers Git integration. We chose Workers Git integration so Cloudflare builds and deploys from the connected repo, matching our Workers + assets `wrangler.toml`, without maintaining deploy credentials or workflow YAML in GitHub.
