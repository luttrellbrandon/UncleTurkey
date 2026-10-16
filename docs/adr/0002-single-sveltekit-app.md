# Single SvelteKit app with server routes for High Scores

We need a public site and a High Score API in one repository. We considered a multi-package monorepo (`apps/web` + `apps/api`), a workspace-ready single app with extra `packages/` scaffolding, and one SvelteKit app where High Scores are server routes. We chose the single SvelteKit app so the gag site stays one deployable on Cloudflare, with Phaser Mini Games as features inside that app, and room to extract packages later if a boundary becomes real.
