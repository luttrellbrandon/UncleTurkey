# Turkey Assets

How to create and store art for **Uncle Turkey** (Daniel) and **Guest Turkeys** (Steph Turkey, Brandon Turkey, …).

Domain terms: [`CONTEXT.md`](../CONTEXT.md) · Decisions: ADRs `0009`–`0013`

## Rules

1. **Never commit Source Likeness** (real photos). Keep them only in local `.private/likeness/` (gitignored).
2. Commit only finished **Turkey Assets** (stylized cartoon turkey + illustrated face).
3. Cast library: `src/lib/assets/characters/{slug}/`
4. Mini Game–only art: `src/lib/games/<game-id>/assets/`
5. Slugs: `uncle-turkey`, `steph-turkey`, `brandon-turkey`, …

## Pose Pack (per character)

| File | Use |
|------|-----|
| `portrait.png` | UI, Origin Story, nav / cards |
| `idle.png` | Default full-body |
| `flap.png` | Wings up / motion |
| `hit.png` | Comedic hit / “gotcha” |

Transparent background. WebP later is fine; start with PNG.

## Folder map

```text
.private/likeness/              # LOCAL ONLY — Source Likeness (gitignored)
src/lib/assets/characters/
  uncle-turkey/                 # Daniel = Uncle Turkey
  steph-turkey/
  brandon-turkey/
src/lib/games/turkey-hunt/assets/   # Phaser sheets later
```

## Prompting GPT / ChatGPT

### Workflow

1. Put Source Likeness in `.private/likeness/` on your machine (e.g. `daniel.jpg`).
2. In ChatGPT (or similar), **attach that photo as a private reference** — do not add it to the repo.
3. Paste the **style lock** below every time.
4. Generate **one pose per request**.
5. Download → rename → drop into `src/lib/assets/characters/{slug}/`.

### Style lock (every generation)

> Fall-festive gag-game character. Stylized cartoon turkey body (warm autumn oranges/browns, simple shapes, clean outlines). Face is an *illustrated* likeness of the reference person — recognizable, not a photoreal photo paste. Flat cel-shaded, consistent proportions across poses. Transparent background. No text, no watermark, no photo collage edges.

### Pose prompts

Replace `{Character}` with `Uncle Turkey` / `Steph Turkey` / `Brandon Turkey`.

**portrait.png**

> Using the attached reference, create **{Character}**: {style lock}. Bust/portrait — head and upper feathers, facing camera, friendly gobble expression. Transparent background. Square or near-square composition.

**idle.png**

> Using the attached reference, create **{Character}**: {style lock}. Full body, standing, three-quarter view, wings relaxed. Same design language as a festive gag game sprite. Transparent background.

**flap.png**

> Same character as before — **{Character}**: {style lock}. Full body, wings raised mid-flap, same proportions and face style as idle. Transparent background.

**hit.png**

> Same character — **{Character}**: {style lock}. Full body, comedic “got hit” squash pose, same proportions and face style as idle. Transparent background.

### Guests

Same style lock and poses. Explicitly say:

> This is **Steph Turkey** (guest cameo). Same art rules and turkey-body design language as Uncle Turkey; only the illustrated face/identity changes.

### Consistency tips

- Generate Uncle Turkey’s full Pose Pack first; attach those finished PNGs when prompting guests (“match this turkey body style”).
- If the face drifts photoreal, add: “more illustrated / cel-shaded face, less photographic.”
- If edges look cut-out, add: “no hard photo mask; face must be drawn into the turkey, not pasted.”

## Importing in code

```ts
import unclePortrait from '#lib/assets/characters/uncle-turkey/portrait.png';
```

Turkey Hunt can import from the characters library or keep packed sheets under `#lib/games/turkey-hunt/assets/` later.
