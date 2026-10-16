# Mini Games as feature folders under `src/lib/games`

Phaser Mini Games need a home inside the single SvelteKit app. We considered keeping all game code under `src/routes/games`, a top-level `games/` directory outside `src`, and feature folders under `src/lib/games/<game-id>` with thin route shells. We chose `src/lib/games/<game-id>` so each Mini Game owns its Phaser code, assets, and types in one place, while routes stay responsible only for mounting and page chrome.
