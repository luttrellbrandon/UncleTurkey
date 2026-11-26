# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The friend group and family around Daniel, who already know him as **Uncle Turkey**. They usually arrive from a link dropped in a group chat around Thanksgiving, on their phones, between courses or on the couch afterwards. Inside jokes need no explanation. Their job is to laugh, play Turkey Hunt, beat each other's High Scores, and send the link to whoever hasn't seen it. Daniel himself is the target of the joke, and he's also part of the audience.

## Product Purpose

Uncle Turkey is a Thanksgiving gag site that roasts one person. It hosts Mini Games (starting with **Turkey Hunt**, a Duck Hunt–style shooter whose targets are Turkey Assets of the friends), an **Origin Story** of the nickname, and **Turkey Links** (costumes, gag merch). It succeeds when the group chat lights up: people play, post their scores, and keep coming back to the joke every November.

## Positioning

It is a bespoke roast of a real person, built by his best friend. The cast (Daniel Turkey, Steph Turkey, Steve Turkey, Brandon Turkey, the Stuffed Turkey decoy), the Rivalries (ping pong, fishing, racquetball) and the scoring jokes are real details of this friend group (for example, shooting Brandon Turkey costs you points). A generic Thanksgiving game site couldn't copy them.

## Operating Context

- Shared by URL in group chats, so it's opened mostly on mobile, during Thanksgiving gatherings.
- High Scores are submitted with an optional Display Name. There are no accounts (ADR 0006).
- Deployed on Cloudflare Workers from `main` to uncleturkey.com, with D1 for High Scores.

## Capabilities and Constraints

- Stack: SvelteKit, adapter-cloudflare, Tailwind v4, DaisyUI, Phaser for Mini Games, Drizzle/D1.
- Routes: `/` home, `/origin`, `/games` (Games Hub), `/games/turkey-hunt`, `/links`, `/api/games/[gameId]/scores`.
- DaisyUI components and the DaisyUI navbar stay (ADR 0015). The stock `autumn` theme lock (ADR 0014) is loosened to a **custom Uncle Turkey DaisyUI theme**, confirmed 2026-11-25. ADR 0014 should be superseded.
- Domain vocabulary in `CONTEXT.md` is canonical (Hunt Target, Shot, Fly-off, Level, Point Quota, Run, Rivalry, Guest Turkey…).
- Turkey Hunt currently uses labeled stand-in birds until Turkey Assets exist.

## Brand Commitments

- Name: **Uncle Turkey**. The character *is* the brand, and the character is Daniel.
- Voice: **full roast**. Merciless but loving: fake-solemn tributes, mock propaganda, overblown reverence. It is never actually mean-spirited, and it never jokes about anything that would genuinely hurt.
- Thanksgiving and festive, deliberately quirky.
- Likeness rule (ADR 0009, 0013): only stylized cartoon turkey bodies with illustrated faces. Real photos (Source Likeness) never ship or get committed.

## Evidence on Hand

- No Turkey Assets exist yet. `src/lib/assets/characters/*/` folders are empty; generation prompts are in `docs/assets.md`. Pages must work with placeholders and must not fake a portrait of Daniel.
- Origin Story and Turkey Links copy are placeholders (`src/lib/content/`). Don't invent real lore; leave the slots clearly marked.
- No real High Scores, quotes or testimonials yet. Don't fabricate them as genuine.

## Product Principles

1. **The roast is the product.** Every surface should land a joke about Uncle Turkey, not just look seasonal.
2. **Insider-first.** Write for people who know Daniel. Specificity beats broad appeal.
3. **Play in one tap.** Turkey Hunt is the main event, reachable immediately from a group-chat link on a phone.
4. **Loving, not cruel.** Absurd reverence and mock outrage, never humiliation.
5. **Placeholders stay honest.** Missing art and lore read as "coming soon," never as fabricated fact.

## Accessibility & Inclusion

Mobile-first touch play. Keep text readable against festive backgrounds, and respect `prefers-reduced-motion` for decorative animation.
