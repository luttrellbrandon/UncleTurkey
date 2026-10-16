# Turkey Assets live in a characters library plus per-game assets

Finished Turkey Assets must support site chrome and multiple Mini Games with a growing cast (Uncle Turkey and Guest Turkeys). We considered storing everything only under each game, dumping files into `static/characters/`, and a shared `src/lib/assets/characters/{slug}/` library with game-specific assets under `src/lib/games/<game-id>/assets/`. We chose the shared characters library plus per-game assets so the cast is reusable site-wide while each Mini Game still owns its Phaser sheets and frames.
