# Uncle Turkey

Fall-festive gag site for Uncle Turkey — Origin Story, Mini Games (Phaser), Turkey Links, and High Scores on Cloudflare.

Domain language: [`CONTEXT.md`](./CONTEXT.md) · Decisions: [`docs/adr/`](./docs/adr/) · Deploy: [`docs/deploy.md`](./docs/deploy.md) · Assets: [`docs/assets.md`](./docs/assets.md)

## Stack

- SvelteKit + `@sveltejs/adapter-cloudflare`
- Cloudflare Workers (Git deploy on `main`) + D1 via Drizzle
- Tailwind / DaisyUI
- Phaser (add when you flesh out Turkey Hunt)

## Deploy (GitHub → Cloudflare)

Production: **commits to `main`** → Cloudflare Workers Builds → Worker `uncle-turkey` → **uncleturkey.com**.

Set it up manually in the Cloudflare dashboard — step-by-step: [`docs/deploy.md`](./docs/deploy.md).

## Layout

```text
src/
  routes/                 # pages + /api/games/[gameId]/scores
  lib/
    assets/characters/    # Uncle Turkey + Guest Turkey Pose Packs
    content/              # Origin Story, Turkey Links, Games Hub catalog
    games/turkey-hunt/    # Phaser Mini Game (+ assets/)
    server/db/            # Drizzle schema + High Score helpers
    ui/                   # gag chrome (turkey cursor)
.private/                 # local Source Likeness only (gitignored)
migrations/
docs/assets.md            # GPT prompts + asset rules
docs/deploy.md
docs/adr/
wrangler.toml
```

Imports use the `#lib` alias (see `package.json` `imports`).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/origin` | Origin Story |
| `/games` | Games Hub |
| `/games/turkey-hunt` | Turkey Hunt shell |
| `/links` | Turkey Links |
| `/api/games/[gameId]/scores` | High Scores GET/POST |
