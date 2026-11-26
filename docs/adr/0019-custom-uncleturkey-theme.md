# Custom "uncleturkey" DaisyUI theme supersedes stock autumn

Supersedes [0014](./0014-daisyui-autumn-locked.md).

The site's look is now a Thanksgiving-week supermarket circular: circular red, process yellow, newsprint, ink and produce green, with square corners, heavy borders and condensed display type. Stock `autumn` couldn't carry that. We kept DaisyUI (components, navbar per ADR 0015) and replaced the stock theme with a single custom theme, `uncleturkey`, defined in `src/routes/layout.css` and set on `<html data-theme>`. It is still the only theme and there is still no switcher. The theme's tokens are documented in `DESIGN.md`.
