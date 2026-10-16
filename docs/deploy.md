# Deploy Uncle Turkey (manual Cloudflare setup)

Production deploys on **push to `main`** via **Cloudflare Workers Git integration** (ADR `0007`). No GitHub Actions. No setup scripts — do this in the [Cloudflare dashboard](https://dash.cloudflare.com/).

| Item | Value |
|------|--------|
| GitHub repo | `luttrellbrandon/UncleTurkey` |
| Worker name | `uncle-turkey` (must match `wrangler.toml`) |
| D1 name | `uncle-turkey` |
| Domain | `uncleturkey.com` |
| Production branch | `main` only (no PR previews) |

---

## 1. Create the D1 database

1. Cloudflare dashboard → **Workers & Pages** → **D1**.
2. **Create database** → name: `uncle-turkey` → Create.
3. Open the database → copy **Database ID**.
4. In this repo, set `database_id` in `wrangler.toml` to that UUID (replace `REPLACE_WITH_D1_DATABASE_ID`).

Optional (any terminal you like, after `npm install`): apply the High Scores schema remotely:

```text
npx wrangler d1 migrations apply uncle-turkey --remote
```

Or use the D1 console in the dashboard to run the SQL in `migrations/0001_high_scores.sql`.

---

## 2. Create the Worker

1. **Workers & Pages** → **Create** → **Worker**.
2. Name it exactly **`uncle-turkey`**.
3. You can leave the default stub; the next Git deploy will replace it.

---

## 3. Connect GitHub (deploy on `main`)

1. Open Worker **`uncle-turkey`** → **Settings** → **Builds**.
2. **Connect** → authorize Cloudflare on GitHub if asked.
3. Select repository **`luttrellbrandon/UncleTurkey`**.
4. Use these build settings:

| Setting | Value |
|---------|--------|
| Git branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | leave default (repo root) |
| Preview / PR builds | **Off** |

5. Save.

Docs: [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).

---

## 4. Attach `uncleturkey.com`

1. Worker **`uncle-turkey`** → **Settings** → **Domains & Routes** (or **Triggers**).
2. **Add** → **Custom domain** → `uncleturkey.com` (add `www` too if you want).
3. If the domain is already on this Cloudflare account, DNS is usually created for you — keep records **Proxied** (orange cloud).

---

## 5. Ship

1. Commit `wrangler.toml` with the real `database_id` (and `worker-configuration.d.ts` if you’ve generated types locally).
2. Push to **`main`**.
3. In the Worker → **Deployments** / **Builds**, wait for a green build.
4. Open https://uncleturkey.com  
5. Optional check: https://uncleturkey.com/api/games/turkey-hunt/scores

---

## Local helpers (optional)

Only if you want them on your machine — not required for dashboard setup:

```text
npm run gen      # wrangler types
npm run build
npm run deploy   # build + wrangler deploy (bypasses Git for a one-off)
```
