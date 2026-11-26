# Daniel Turkey's doorbuster uses six photoreal poses, rotating per visit

Partly supersedes [0013](./0013-stylized-illustrated-faces.md) for the landing page doorbuster only.

The user supplied a sheet of six photoreal Daniel Turkey composites (pilgrim, runner, beach, camo, roast, superhero) and asked for them on the landing page. We considered keeping the doorbuster illustrated, and showing one fixed pose. We chose to ship all six, cropped to `src/lib/assets/characters/uncle-turkey/poses/*.webp`, with one per visit: an httpOnly `ut_pose` cookie set in `src/routes/+page.server.ts` advances through them, and a first visit starts on a random pose. Everywhere else (Turkey Hunt, Origin Story) keeps the illustrated cast turkey heads from ADR 0021. The source sheet and the raw head shots stay in the gitignored `.private/likeness/` folder, per ADR 0009.
