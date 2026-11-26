---
name: Uncle Turkey Market
description: Thanksgiving-week supermarket circular that puts Uncle Turkey on sale by the pound.
colors:
  circular-red: "#d8141b"
  process-yellow: "#ffd400"
  produce-green: "#1d7438"
  newsprint: "#fff4dc"
  newsprint-fold: "#f7e6bd"
  newsprint-crease: "#ead29a"
  ink: "#161210"
  recall-red: "#b3121b"
  flyer-blue: "#1b5fa8"
  bubble-white: "#ffffff"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "clamp(4.25rem, 18vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "2.6rem"
    fontWeight: 900
    lineHeight: 0.9
  price:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "3.2rem"
    fontWeight: 900
    lineHeight: 0.85
    fontFeature: "\"tnum\""
  title:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1
  shout:
    fontFamily: "'Yellowtail', cursive"
    fontSize: "2.2rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "'Archivo Narrow', 'Arial Narrow', sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.375
  story-body:
    fontFamily: "'Archivo Narrow', 'Arial Narrow', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  lettering:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    lineHeight: 1.05
  label:
    fontFamily: "'Archivo Narrow', 'Arial Narrow', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  overlay:
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  hairline: "4px"
  tight: "8px"
  gutter: "12px"
  box: "16px"
  aisle: "20px"
components:
  coupon-primary:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "12px"
  doorbuster-box:
    backgroundColor: "{colors.circular-red}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "10px 16px 16px"
  price-box:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.ink}"
    typography: "{typography.price}"
    rounded: "{rounded.none}"
    padding: "10px"
  price-box-recalled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "10px"
  aisle-tag:
    backgroundColor: "{colors.produce-green}"
    textColor: "{colors.newsprint}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  department-coupon:
    backgroundColor: "{colors.newsprint-fold}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "12px"
  department-coupon-hover:
    backgroundColor: "{colors.process-yellow}"
  nav-link-active:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  masthead:
    backgroundColor: "{colors.circular-red}"
    textColor: "{colors.newsprint}"
    padding: "8px 16px"
  monitor-bezel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.process-yellow}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "6px"
  overlay-plate:
    backgroundColor: "rgb(22 18 16 / 0.8)"
    textColor: "{colors.process-yellow}"
    typography: "{typography.overlay}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  overlay-plate-streak:
    backgroundColor: "{colors.produce-green}"
    textColor: "{colors.newsprint}"
    typography: "{typography.overlay}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  walkie-strip:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "10px"
  walkie-tag-uncle:
    backgroundColor: "{colors.circular-red}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "4px 6px"
  walkie-tag-mgr:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.process-yellow}"
    rounded: "{rounded.none}"
    padding: "4px 6px"
  price-tag:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  price-tag-recalled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.process-yellow}"
    rounded: "{rounded.none}"
  hunt-button:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "44px"
  hunt-button-quiet:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.ink}"
  end-panel:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "16px"
  comic-panel:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px"
  comic-narration:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.lettering}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  speech-bubble:
    backgroundColor: "{colors.bubble-white}"
    textColor: "{colors.ink}"
    typography: "{typography.lettering}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  speech-bubble-shout:
    backgroundColor: "{colors.bubble-white}"
    textColor: "{colors.circular-red}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  sfx-burst:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.circular-red}"
    size: "6.5rem"
  comics-masthead:
    backgroundColor: "{colors.circular-red}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "12px 16px 20px"
  feature-band:
    backgroundColor: "{colors.produce-green}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "12px"
  stat-card:
    backgroundColor: "{colors.newsprint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
  end-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "24px 16px"
---

# Design System: Uncle Turkey Market

## Overview

**Creative North Star: "This Week's Loss-Leader"**

Uncle Turkey is the doorbuster in a Thanksgiving-week supermarket circular. Every surface is a page of that weekly ad: a red store masthead, a black date strip, price boxes ruled in ink, process-yellow starbursts and dashed coupons, all printed on warm newsprint. The roast lives in the fine print. The ad sells him by the pound and the small type undercuts the sale.

Density is circular-dense, not airy: boxes butt against each other on a 12px gutter, one price-box grid owns the layout, and billing rank is ruthless (the doorbuster is billed roughly three times anything else on the page). The system rejects the warm-autumn hero with a centered mascot and three soft cards; the incumbent stock `autumn` theme was replaced for exactly that reason (ADR 0019).

Corners are square, borders are heavy, depth is printed rather than lit. Motion is rare and authored: the price burst slams onto the page once, and the coupon tears out when clipped.

The game surface (Turkey Hunt) is the same store seen through its security monitor: an ink bezel, yellow camera-overlay text on translucent ink plates, a red REC lamp as the clock, and rivalry rooms printed in the circular's own flat inks. Birds wear the ad's price tags. Inside the playfield, gameplay motion is allowed; outside it, the page stays as still as the ad.

The story surface (Origin Story) is the circular's Sunday Funnies insert: the same newsprint and inks, set as square ink-framed comic panels with yellow narration boxes, white speech bubbles, SFX words in the authored starburst, and drawn cartoon turkeys. Prose runs beside each panel at a reading measure. The page is as still as the ad: the bursts are printed, not slammed.

**Key Characteristics:**
- Square corners everywhere (0px); 2-3px ink rules and price-box borders.
- Circular red, process yellow, newsprint, ink, with produce green as the single "deal" accent.
- Condensed heavy grotesque for prices and headings, script only for shouts, narrow grotesque for fine print.
- Dashed borders mean "you can clip this": coupons, departments, portrait slots.
- Turkey Assets are illustrated; placeholders are labeled as placeholders.
- On the game surface, overlay text is yellow on ink at 80%, and every bird carries a price tag.
- On the story surface, every chapter is a comic panel: a 3px ink frame, a yellow narration strip, white bubbles with measured tails.

## Colors

Four-color-process grocery flyer: saturated red and yellow on warm paper, black for every rule, one green for deals.

### Primary
- **Circular Red** (`colors.circular-red`): masthead, doorbuster box, primary price numerals. Deliberately a step deeper than the planned `#e3171e` so newsprint fine print on red clears 4.5:1. Text set on it is always Newsprint.

### Secondary
- **Process Yellow** (`colors.process-yellow`): starbursts, the primary coupon, the active nav pill, the masthead underline (4px), selection highlight, tags on ink. Text on it is always Ink.

### Tertiary
- **Produce Green** (`colors.produce-green`): the one "deal" accent. Aisle tags on price boxes, the top-value Hunt Target price (400+ points), the Department of Grudges band.

### Neutral
- **Newsprint** (`colors.newsprint`): page ground and text on red or green.
- **Newsprint Fold** (`colors.newsprint-fold`): recessed paper behind coupons and department tiles.
- **Newsprint Crease** (`colors.newsprint-crease`): dashed dividers inside menus.
- **Ink** (`colors.ink`): all body text, every border and rule, the date strip, the footer, "recalled" (negative-point) price boxes, focus outlines.
- **Recall Red** (`colors.recall-red`): error state; on the game surface also the penalty bird's caption stroke, its negative point pop, its fan feathers and the turkeys' wattles.
- **Flyer Blue** (`colors.flyer-blue`): info state in UI chrome. In printed scenery it is water (the dock's lake, the Florida coast), the racquetball, a whole scene field (the master's-degree circuit board), and Brandon's fan; it never becomes a UI accent.
- **Bubble White** (`colors.bubble-white`): speech bubbles and their tails, the practice-log card, the grade card in a scene, the end panel's name field. Pure white reads as "a different paper" against newsprint; it never becomes a page ground.

On the game surface the same tokens are mirrored as Phaser numbers in `src/lib/games/turkey-hunt/levels.ts` (`INK`); edit both together. That file also carries **illustration pigments** for drawn turkeys only: plumage orange (`#f08a1c`), body browns (`#7a3b16`, `#9a4a1c`, `#5a2a10`, `#3a2e28`), stuffed tan (`#c9a46a`) and head skin (`#e8574a`). They paint birds and props, never UI. The comic turkeys (`src/lib/ui/comic/ComicTurkey.svelte`) are drawn from the same pigments and tokens, keyed by bird: Daniel is warm body brown with a red, yellow and orange fan; Brandon is the dark recalled brown with a Flyer Blue and yellow fan (and usually shades); Steph is rust with a yellow and green fan; Steve is dark brown with a green and yellow fan. Every cast bird wears its own **cast turkey head** from `src/lib/assets/characters/faces.ts` (ADR 0021): a bare turkey head with the beak, snood and wattle, plus the person's signature traits. Daniel has a brown quiff and rectangular glasses; Brandon has a dark spiky crest and an open-beak grin; Steph has a swept-back ponytail, sunglasses on top and a gold hoop; Steve has a shiny bald head and gray stubble. Heads are turkeys first: never human faces, never photos. They are sized so the traits read at shipped size: 78 world units on Hunt birds and 76 on comic turkeys. The stuffed decoy and the Elvis officiant keep plain heads. The one exception is the landing doorbuster's "store photo" (ADR 0022). It shows one of six photoreal Daniel Turkey poses, which rotate per visit via the `ut_pose` cookie. Each pose is a square crop, `object-cover` and top-anchored, inside the dashed yellow frame with a 2px ink keyline, captioned with its own fine-print roast. Photoreal imagery lives only there.

### Named Rules
**The Fine-Print Contrast Rule.** Any text on Circular Red must clear 4.5:1; that is why red is `#d8141b`. Don't brighten it back to make it "pop".

**The One Deal Rule.** Green is the only accent beyond red and yellow, and it means "deal". Don't add a fourth decorative hue to UI. Drawn turkeys and props may use their illustration pigments, because a turkey is brown; scenery may print water, balls and whole scene fields in Flyer Blue. On the Hunt, green still means deal: the Bulk Discount streak plate is green. On the story surface, a green field marks a tall-tale feature band, the way the home's Department of Grudges band is green.

## Typography

**Display Font:** Big Shoulders Display (with Arial Narrow, sans-serif), self-hosted variable 100-900
**Body Font:** Archivo Narrow (with Arial Narrow, sans-serif), self-hosted variable 400-700
**Shout Font:** Yellowtail (with cursive), self-hosted 400. Only the latin subset is declared in the stylesheet; `yellowtail-400-latin-ext.woff2` ships in `static/fonts` but has no `@font-face`, so extended-Latin characters in a shout fall back to cursive.

**Character:** A heavy condensed grotesque shouts prices the way a circular does, a narrow grotesque keeps the fine print legible at small sizes, and a brush script supplies the "Doorbuster!" exclamations.

### Hierarchy
- **Display** (900, clamp(4.25rem, 18vw, 6rem), 0.82, uppercase): the doorbuster title, one word per line. One per page. The comics masthead title uses the same step with a lower floor (clamp(3.6rem, 15vw, 6rem), 0.84) because its title runs four words.
- **Headline** (900, 2.4-2.6rem, 0.9, uppercase): section heads ("Turkey Hunt specials", "Nutrition Facts"), coupon title, comic chapter titles (rising to 3rem from 768px, 3.75rem on the splash chapter).
- **Price** (900, 3.2rem, 0.85, tabular figures): point values and prices; unit set at ~0.3em, bold, top-aligned.
- **Title** (800, 1.45-2rem, 1, uppercase): item names, department names, nav links (1.25rem).
- **Shout** (Yellowtail 400, 2.2rem mobile / 3.6rem desktop, 1): "Doorbuster!", "Shop early!", "Sunday Funnies!" (3.2rem from 1024px), "To be continued…". In yellow on red, yellow on ink, or red on newsprint.
- **Body** (400, 0.88-0.95rem, ~1.375, max 40-60ch): fine print, item lines, the roast.
- **Story Body** (400, 1.05rem, 1.625, max 60ch): long-form reading prose beside comic panels, the comics masthead intro and the end band. The only body step meant for paragraphs read in sequence; fine print stays on Body.
- **Lettering** (Big Shoulders 800, 1.15rem, 1.05, uppercase): comic narration boxes and speech bubbles. Bubbles step down to 1rem under 640px; a shout bubble is 1.2rem rising to 1.5rem from 640px, in Circular Red.
- **Label** (700, 0.7-0.8rem, 0.04-0.08em tracking, uppercase): aisle tags, coupon terms, date strip.
- **Overlay** (Big Shoulders 800, 1.125rem / 1.25rem from 640px, 1, uppercase, tabular figures for numbers): the Hunt's camera overlay plates (level, streak, quota). The "Got away" and "Quota" sub-labels drop to 1rem and the quota divisor to 0.875rem.
- **Game-world type** (Phaser canvas, sized from the playfield rather than the ramp): price-tag text is Big Shoulders 900 at max(17, 15 × scale) world px, so it is never under 15px on screen; meme captions are Big Shoulders 900 at 7% of the playfield's short side (8.5% for the Bulk Discount caption); pennants at 4.5% of its height; point pops at 30 world px.

### Named Rules
**The Fine-Print Rule.** The joke goes in body-size fine print, never in the headline. Headlines sell; the small type roasts.

**The Shout-Sparingly Rule.** Script is for exclamations only, at most one shout per box, and never for body or navigation.

**The Lettering-Not-Script Rule.** Comic speech and narration are lettered in Big Shoulders uppercase, never in the script face; Yellowtail stays the shout of the box, not the voice of a bird.

**The Fifteen-Pixel Tag Rule.** Text drawn on the game canvas scales with the canvas, so it is sized against on-screen pixels: price-tag text never renders under 15px on screen.

## Layout

A single price-box grid owns all layout. On the home ad the container is 72rem (`max-w-6xl`) with a 12px gutter on phones and 16px from 1024px up; side padding is 12px (16px from 640px). At 1024px the grid becomes 12 columns: the doorbuster spans 7 columns and 2 rows, the coupon and nutrition panel share the other 5, and full-width bands (specials, rivalries, departments) span 12. Specials step 2 → 3 (640px) → 5 (1024px) columns. Inner pages use the 64rem reading column from the layout. Section bands are separated by a 4px ink rule under the headline, not by whitespace alone. A full-width ink date strip sits directly under the masthead.

The Turkey Hunt route is full-bleed in the layout too, and sets its own 64rem column (8px side padding, 16px from 640px). It stacks three blocks on a 12px gap: the monitor bezel, the walkie strip, and the Price Check list. The playfield's aspect ratio comes from the game world: 3:4 (540×720) when the column is under 640px, 16:10 (960×600) from 640px, scaled to fit. Overlay plates pin to the four playfield corners 8px in: level and rivalry top-left, streak top-right, Got Away pips bottom-left, quota meter bottom-right (46% wide, max 15rem). Meme captions stay between 11% and 48% of the playfield height so they never sit under the corner plates or the foreground. A heading row above the bezel pairs the page title with a right-aligned aisle tag.

The Origin Story route is full-bleed in the layout and sets its own 72rem column (12px side padding, 16px from 640px; horizontal overflow clipped so breakout bubbles never cause page scroll). Order: the red comics masthead box, then chapters stacked on a 40px gap (56px from 1024px). From 768px each chapter is a 12-column row: the panel spans 7, the prose 5 (24px top offset so the title sits level with the scene), and the panel side alternates chapter by chapter. Below 768px the panel stacks above its prose. One chapter per page is the **splash**: the panel runs full width (with 5% right margin from 768px so the breakout shout has room), its title sits under it, and its prose splits into two columns from 768px. Tall-tale features interrupt the chapters: a full-width green feature band (panel 7 / stat cards 5), a 6/6 panel-and-log row, and a 7/5 row with the panel on the right. The page ends in a full-width ink end band.

Inside a panel, bubble placement switches on the scene's rendered width. From 480px, bubbles sit inside the scene, absolutely placed and stacked top-down in reading order, each fully below the last with a 2% gap, left-speakers 3% from the left and right-speakers 3% from the right, at most 46% wide (50% for a shout). A scene may start its first bubble lower (`BUBBLE_START`, in % of scene height) to keep a prop at the top visible. Under 480px the bubbles move to a band above the scene (8px gaps, 82% max width, aligned to the speaker's side) so the scene's props stay visible.

## Elevation & Depth

Flat and printed. DaisyUI depth is 0 and noise is 0; depth is carried by heavy ink borders, dashed cut lines, and diagonal hatch fills (a 45° 2px ink hatch at 18% in the hole the coupon leaves behind, a −45° yellow hatch at 8% on recalled boxes). Shadows appear only as state, never at rest: when a coupon lifts on hover or tears out when clipped, and under the open mobile menu.

### Shadow Vocabulary
- **Coupon lift** (`box-shadow: 0 12px 22px -10px rgb(22 18 16 / 0.5)`): coupon body on hover.
- **Coupon torn** (`box-shadow: 0 22px 34px -14px rgb(22 18 16 / 0.6)`): coupon body after clipping.
- **Menu drop** (`box-shadow: 0 10px 24px -8px rgb(22 18 16 / 0.45)`): mobile Aisles dropdown.

On the game surface, depth is layering, not light. The room paints first, opaque wall pennants sit at depth 1-2, birds fly at depth 10, and the foreground prop (table, dock, service line) is drawn at depth 50, so birds rise from behind it. Captions (900), the shot ring (950) and the reticle (1000) sit above everything. Translucency appears only in the camera overlay: plates are ink at 80%, and the end-of-level scrim is ink at 55%. The in-game buttons reuse the coupon-lift shadow on hover only.

On the story surface, depth is stacking order only: scene, then bubble tails (under the bubbles), then bubbles and the narration strip, then the SFX burst on top. No shadows appear on the story page; its one handled element, the end band's coupon link, lifts 2px on hover without a shadow.

### Named Rules
**The Printed-Not-Lit Rule.** At rest nothing casts a shadow. Paper lifts only when the visitor handles it.

**The Behind-The-Prop Rule.** Birds rise from behind the room's foreground prop and in front of its wall pennants. Pennants are opaque so a bird never reads through them.

## Shapes

Square corners throughout (`rounded.none`; DaisyUI selector, field and box radii are all 0). Borders are 2px by default (DaisyUI `--border`), 3px for the dominant boxes (doorbuster, coupon outer, nutrition, rivalry band). Solid borders mean a printed box; dashed borders mean a clippable or pending thing (coupons, department tiles, the portrait slot). The one non-rectangular silhouette is the starburst: an authored SVG polygon (22 points, 16% depth, 1.6 ink stroke) rotated −8°, allowed to cross its own box's border but never to touch a neighboring box.

The SFX burst is the same polygon with 16 points at 22% depth, rotated −10°.

In UI, circles are allowed only for lamps, holes and sights: the REC lamp, the price tag's punch holes, the shot ring and the reticle. Never use a circle for a container, a button or a plate. Drawn scenery is exempt: suns, marquee bulbs, balls, clocks and eyes are circles because that is what they are. Drawn turkeys and props are built from ellipses with 2-3px ink outlines, like the rest of the print.

## Components

### Buttons (Coupons)
Clipping is the primary action. Coupons are the buttons.
- **Shape:** square, a 3px dashed ink cut line around a 2px solid ink coupon body.
- **Primary:** Process Yellow body, Ink text, headline type, a dashed right-hand stub with an inline scissors SVG and "Clip & play".
- **Hover:** body lifts (`translate(-2px,-3px) rotate(-0.8deg)`, coupon-lift shadow, 260ms ease-out-expo); scissors snip.
- **Clipped:** body tears out (`translate(18px,30px) rotate(-6deg)`) over the hatched hole, a red "Redeemed" stamp scales in carrying the fine-print reveal, then navigation follows (1100ms, 500ms under reduced motion).

### Price Boxes
- **Style:** 2px ink border on newsprint (60% white over the ground), price in Circular Red, item name in title type, one-line roast in body.
- **Value colors:** Circular Red by default, Produce Green for the top-value target, Process Yellow on an Ink box for negative ("recalled") values with a yellow hatch.
- **Tags:** an aisle tag sits on the top border, right-aligned (green, or yellow on recalled boxes).

### Doorbuster Box
The one box billed 3× the rest: Circular Red, 3px ink border, shout + display title, a starburst price crossing the right border, a dashed yellow portrait slot captioned "Actual turkey may vary", a struck-through "was" price set as stacked block lines ("Reg. priceless" / "(to his mom)"), and the fine-print roast. On phones the burst (about 9.75rem) overhangs the border by about 14px; on desktop (16rem) it crosses the border by only about 5px and must stop short of the coupon beside it.

### Starburst
Authored SVG polygon behind centered content, Process Yellow fill and Ink stroke by default. It slams in once on load (700ms, from −24° at 1.25× to −8° at 1×). Never built with clip-path. The component takes `points` and `depth`; the story surface's SFX burst (below) is its 16-point, 22%-depth setting and does not slam.

### Navigation
- **Masthead:** sticky Circular Red bar with a 4px Process Yellow underline; wordmark "Uncle Turkey" in display 900 with "Market" in yellow tracked label.
- **Desktop links:** title type in a 2px border pill; transparent at rest, yellow border on hover, Process Yellow fill with Ink border when current.
- **Mobile:** a yellow "Aisles" summary opens a newsprint dropdown (2px ink border, menu-drop shadow) listing each department with its aisle number right-aligned.

### Department Coupons
Dashed 2px ink tiles on Newsprint Fold; title type with a bordered aisle number and an arrow. Hover fills Process Yellow and lifts 2px; the arrow nudges right.

### Nutrition Facts Panel
A parody label in Ink on Newsprint: 3px border, 6px and 4px ink rules between blocks, tabular figures. Used for structured roast facts.

### Placeholder Turkey
An illustrated stand-in bird with a dashed "FACE PENDING" sticker. It is never a likeness and never a photo, and it says it's pending.

### Security-Cam Monitor Bezel (game surface)
The Hunt's frame. A 3px ink border around an ink bezel (6px padding, 10px from 640px) holding a 2px ink-bordered playfield. The top bar is yellow Big Shoulders 800 uppercase: the cam label ("Cam 1 · Rec room") on the left, and on the right a round red REC lamp (12px) plus "Rec m:ss" in tabular figures, which is the level clock. The bottom bar carries the run total and a "Quit & save" control (2px yellow border, at least 44px tall, fills yellow on hover).

### Overlay Plates (game surface)
Camera-overlay readouts pinned to the playfield corners. They are square ink plates at 80% with yellow overlay type and don't take pointer input. The plates are:
- **Level:** "Lvl n/6 · Rivalry", top-left.
- **Streak:** produce green with newsprint text, shown only while a streak is live.
- **Got Away:** a label and one 12px square pip per allowed fly-off, outlined in yellow and filled red when used.
- **Quota meter:** score over quota above an 8px bar with a yellow outline. The bar fills yellow over 300ms ease-out.

### Walkie Strip (game surface)
The taunt channel under the bezel. A Process Yellow box with a 3px ink border (at least 72px tall, 10px padding). A square speaker tag leads it: "Uncle T" is Circular Red with newsprint text, and "Mgr" is ink with yellow text. The line is Big Shoulders 800 uppercase at 1.5rem, line-height 1.02, balanced wrap, in curly quotes. The strip is `role="status"` and `aria-live="polite"`, so every line is announced.

### Price-Tag Bird (game surface)
Each target is a drawn turkey: a fan of five ink-outlined feathers, a body ellipse, a wing, and a bare red-skinned head with an eye, a yellow beak, a red snood over the beak and a recall-red wattle under it. Stuffed is tan and has stitches. Each bird hangs a price tag on a 2px ink string:
- **Tag:** a Process Yellow rectangle with a 2.5px ink border and the name and points in ink Big Shoulders 900.
- **Recalled tag:** Brandon's tag is ink with a yellow border and yellow "RECALLED −100".
- **Punch holes:** a row of circles above the tag shows the remaining Shots. A live Shot is red; a spent one is newsprint.
- **Size:** tag text never renders under 15px on screen. Birds spawn apart so tags don't stack.

### Meme Caption (game surface)
The hit payoff. Uppercase Big Shoulders 900 in Process Yellow, with an ink stroke 22% of the type size. The penalty bird's caption is newsprint with a Recall Red stroke. It wraps at 70% of the playfield width, tilts between −6° and 4°, and stays between 11% and 48% of the playfield height. It slams from 1.6× to 1× over 220ms with expo-out, holds, then rises 18px and fades over 300ms starting at 950ms. Under reduced motion it appears without the slam and leaves after 1100ms.

### End Panel (game surface)
The level-end and run-end card. A square Newsprint card (max 24rem, 3px ink border, 16px padding) centered on an ink scrim at 55%. Its heading is the headline token: Circular Red for "Quota missed", ink for a clear. Body copy is 0.95rem. The final score is Circular Red Big Shoulders 900 at 3rem. The primary action takes focus when the card opens.
- **Hunt button:** a square Process Yellow button with a 2px ink border and Big Shoulders 900 uppercase at 1.5rem, at least 44px tall. On hover it lifts 2px over 160ms with expo-out and takes the coupon-lift shadow. Disabled is 55% opacity with no lift.
- **Quiet button:** the same button on Newsprint, for "Play again".
- **Name field:** 2px ink border on white, square, with no focus ring color change.

### Rivalry Scenery (game surface)
Each Rivalry gets one flat print room drawn in tokens, with ink outlines at 2-4px:
- **Rec room** (ping pong): a paneled fold wall, a crease floor, a red "Uncle Turkey · 0 wins" pennant, and a green ping pong table in front with an abandoned red paddle.
- **The dock** (fishing): newsprint sky, a yellow sun, a green shore, a blue lake with newsprint ripples, a tan dock in front, and a rod bent toward nothing.
- **Court 4** (racquetball): a newsprint wall with red service lines, a hatched crease floor, a green "Wall: undefeated" pennant, and in front a service line, a yellow racquet and a blue ball.
Pennants are opaque fills with a 3px ink border and newsprint Big Shoulders 900 text, clamped inside the playfield.

### Comic Panel (story surface)
The chapter unit. A `figure` with a 3px ink frame on Newsprint. A narration box fills the top strip: Process Yellow, a 3px ink rule under it, lettering type, 8px by 12px padding. Below it, 10px of newsprint matting holds the scene in an inner 2.5px ink frame. The scene is a 400×260 SVG drawn in tokens and illustration pigments with a role="img" label that describes the joke. Panels carry no panel numbers. A 16px bottom margin leaves room for the corner SFX burst.

### Speech Bubbles (story surface)
- **Bubble:** Bubble White, a 2.5px ink border, square, lettering type in ink, 6px by 10px padding (8px by 12px from 640px). The speaker's name is screen-reader-only text ahead of the line.
- **Shout:** a 3px Circular Red border and Circular Red lettering. With the panel's `breakout` flag it may break past the panel border (2.75rem past it in-scene, 1.75rem in band mode). Breakout belongs to the splash panel.
- **Tails:** measured from the rendered bubble, never hand-placed. Each is a wedge with a 14px base set 2px inside the bubble's bottom edge, aimed at the speaker's beak (looked up per scene in `HEADS`), filled Bubble White and stroked 2.5px on its two sides only, so it joins the bubble without a seam. The stroke is ink, or Circular Red for a shout. Reach is capped at 56px in-scene and at the band's bottom plus 34px in band mode, so a tail never crosses a prop's lettering.

### SFX Burst (story surface)
The Starburst with 16 points and 22% depth, Process Yellow with an ink stroke, rotated −10°, holding one red Big Shoulders 900 uppercase sound word. By default it sits on the panel's bottom-right corner, overhanging the frame (6.5rem, 7.5rem from 640px). A panel can instead pin it to a story point inside the scene (`sfxAt`, in % of the scene; 5.5rem, 8rem from 640px), as the Curve Breaker does where the curve snaps. One burst per panel. It does not slam; the slam stays the home doorbuster's load moment.

### Splash Panel (story surface)
One per page, the story's memorable chapter (the Curve Breaker). Full width, the only panel allowed a breakout shout, with its title beneath and two-column prose.

### Meme Caption (story surface)
The page variant of the Hunt's caption: Process Yellow Big Shoulders 900 uppercase at 2rem (2.6rem from 640px), a 0.1em ink text-stroke painted under the fill (`paint-order: stroke fill`), tilted −3°, balanced wrap. Static. One per tall-tale feature, as its payoff line.

### Comic Turkeys (story surface)
Drawn birds built like the Hunt's targets: a five-feather fan, a body ellipse, a wing in the fan's middle color, bare red head skin with an eye, a yellow beak, a red snood and a Recall Red wattle, all with 2-3px ink outlines. They take gear from a fixed set: cap, veil, collar, pompadour, shades, goggles, bowtie, paddle, racquet, rod, hearts and sweat. Bird colors are keyed by name (see Colors). They have no human faces and no likeness. A one-off newsprint bird (the chapel's Elvis) is allowed as a costume.

### Comics Masthead (story surface)
A Circular Red box with a 3px ink border at the head of the story: the "Sunday Funnies!" shout in yellow script with a right-aligned yellow aisle tag ("Aisle 1 · Free"), the display title, the intro in story body, and the "true-ish" disclaimer in 0.88rem fine print at 90% newsprint.

### Tall-Tale Features (story surface)
- **Feature band:** a 3px ink-bordered Produce Green field (12px padding, 20px from 640px) with a headline, a right-aligned yellow aisle tag, an intro, a panel, and a column of **stat cards**: Newsprint, 2px ink border, a title-type stat and a Circular Red Big Shoulders 900 value over a 2px ink rule, then a body line.
- **Practice log:** a Bubble White card with a 3px ink border; each row is a title-type day in a 6.5rem column and a body note, divided by dashed ink rules (row rules, like the menu dividers, not a clip line).
- Each feature ends in a story meme caption.

### End Band (story surface)
A full-width Ink box with a 3px ink border, centered: a yellow script "To be continued…", a newsprint headline (3rem, 3.75rem from 640px), a story-body line at 90% newsprint, and a coupon link to Turkey Hunt. The link is Process Yellow with a 3px dashed yellow border (the clip line, read against the ink), Big Shoulders 900 uppercase, at least 44px tall, and lifts 2px on hover over 200ms ease-out.

### Reticle and Touch (game surface)
The reticle is a red ring (22px radius, 4px) over a 7px newsprint halo, with four red ticks and a center dot. On fine pointers it follows the mouse and replaces the system cursor. On coarse pointers it stays hidden until the first tap, then appears where you tap. Every HTML control on the game surface is at least 44px tall.

## Do's and Don'ts

### Do:
- **Do** keep every corner square and every border Ink (2px; 3px on the dominant boxes).
- **Do** use dashed borders only for things that can be clipped or are pending.
- **Do** label sections with right-aligned aisle tags or tags sitting on the box's top border.
- **Do** build starbursts with the authored SVG polygon component.
- **Do** put the roast in fine print and keep text on red at 4.5:1 or better.
- **Do** keep decorative page motion to the burst slam and the coupon tear, and honor `prefers-reduced-motion` for both. Inside the game playfield only, gameplay motion (flight, flap, fall, the caption slam, hit feedback) is exempt from that limit; the caption slam still honors reduced motion.
- **Do** bill one thing per page as the doorbuster and let everything else rank below it.
- **Do** set game-surface overlay text in yellow Big Shoulders on ink plates at 80%, pinned to the playfield corners.
- **Do** hang a price tag on every bird, show remaining Shots as punch holes, and keep tag text at 15px or more on screen.
- **Do** draw rivalry rooms as flat print in the system's tokens, with birds rising behind the foreground prop and in front of opaque pennants.
- **Do** keep game controls at 44px or taller, and hide the reticle on coarse pointers until the first tap.
- **Do** tell story chapters as comic panels: 3px ink frame, yellow lettered narration strip, scene in a 2.5px inner frame, prose beside it in story body at 60ch.
- **Do** measure bubble tails from the rendered bubble and aim them at the speaker's beak; cap their reach so they never cross a prop's lettering, and move bubbles to a band above the scene under 480px.
- **Do** give a page at most one splash panel, and let only its shout break the border.

### Don't:
- **Don't** set small uppercase eyebrow kickers above headings; use corner flags or right-aligned aisle tags.
- **Don't** make starbursts with `clip-path`.
- **Don't** ship photos of real people as Turkey Assets; turkeys are illustrated, and placeholders say they are placeholders.
- **Don't** add rounded corners, soft cards, or resting drop shadows.
- **Don't** add new decorative animation beyond the burst slam and coupon tear; the gameplay exemption stops at the playfield's edge.
- **Don't** fall back to the warm-autumn centered-mascot hero with three cards.
- **Don't** use circles for containers, buttons or plates; in UI, circles are for lamps, holes and sights (drawn scenery may use them freely).
- **Don't** number comic panels or letter speech in the script face.
- **Don't** animate SFX bursts or story meme captions; on the story page they are printed.
- **Don't** use illustration pigments (plumage orange, body browns, skin) in UI chrome.

<!-- Provenance: recorded from the home Weekly Ad build (src/routes/+page.svelte) after its final correction batch. Finish review verdict: ship, on the scored fixes (as reported by the build coordinator; review captures in .impeccable/review/). Merged 2026-11-25 with the Turkey Hunt game surface (src/routes/games/turkey-hunt/+page.svelte, TurkeyHuntGame.svelte, HuntScene.ts, levels.ts); finish review verdict ship, on the scored fixes (as reported by the build coordinator). Merged 2026-11-25 with the Origin Story surface (src/routes/origin/+page.svelte, src/lib/content/origin.ts, src/lib/ui/comic/ComicPanel.svelte, ComicScene.svelte, ComicTurkey.svelte, reused src/lib/ui/Starburst.svelte), recorded from code while its finish review was in the final verdict pass on scored fixes. -->

<!-- Recorded drift, not repaired: TurkeyHuntGame.svelte sets the bezel's cam/REC bar at a literal 1.35rem on phones (1.5rem from 640px), between the overlay step (1.125rem) and the title step; it is used once and is not added to the ramp. Its other literals (0.92rem, 0.95rem, 1.5rem, 2.6rem) already fall on the body, title and headline steps. The point pop and the shot ring are not gated by prefers-reduced-motion (the caption slam is). Origin Story (detector advisories): literal sizes off the ramp are not added as steps: 0.98rem (stat-card lines and practice-log notes, near Body), 1.6rem (stat values and the end-band link), 1.25/1.45rem and 1.2/1.8rem (SFX words), 2.4rem script on the end band and 3rem on its headline. 2.4rem chapter titles fall inside the Headline range; 1.05rem was systematic (every story paragraph) and became the Story Body step. ComicScene.svelte paints the wizard curtain folds in an off-token dark green (#0f4f25). -->

<!-- Future work: /games and /links do not yet use the circular vocabulary (price boxes, coupons, aisle tags). Carry it to them before treating this system as site-wide in practice. -->
