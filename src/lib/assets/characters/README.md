# Characters

Finished **Turkey Assets** only. See [`docs/assets.md`](../../../../docs/assets.md) and ADR 0021.

| Slug | Character | Head (in `faces.ts`) |
|------|-----------|----------------------|
| `uncle-turkey` | Uncle Turkey (Daniel), main | `daniel`: brown quiff, rectangular glasses, smirk |
| `steph-turkey` | Steph Turkey, guest | `steph`: swept-back ponytail, sunglasses on top, gold hoop |
| `steve-turkey` | Steve Turkey, guest | `steve`: bald with a shine, gray stubble, squinty grin |
| `brandon-turkey` | Brandon Turkey, guest | `brandon`: dark spiky crest, big open-beak grin |

`faces.ts` exports each cast member's illustrated turkey head as SVG (`faceSvg`, `faceUri`). It is used by Turkey Hunt birds, the Origin Story comic turkeys, and the landing page doorbuster.

Real head shots are **Source Likeness**: keep them in `.private/likeness/` (gitignored), never in this folder.

## Doorbuster poses (ADR 0022)

`uncle-turkey/poses/*.webp` holds six Daniel Turkey poses (pilgrim, runner, beach, camo, roast, super), cropped from the user-supplied sheet. The landing page shows one per visit; `src/lib/content/daniel-poses.ts` holds their alt text and captions. Each `.webp.json` sidecar records where the image came from. The full source sheet stays in `.private/likeness/`.
