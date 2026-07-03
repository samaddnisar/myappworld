# Reel videos

Drop a video named **`reel.mp4`** in this folder. It's bundled into the app and
plays instantly (no network) for any post you tap — see `src/lib/reelVideo.ts`.

- Supported: `.mp4`, `.mov`, `.m4v`. The app looks specifically for `reel.mp4`.
- Keep it short & compressed (e.g. H.264, ~720p) so the app stays small.
- If `reel.mp4` isn't present, the app falls back to the remote URL in
  `src/data/reel.ts`.
- After adding/renaming the file, restart Metro with **`npx expo start -c`**
  (the `-c` clears the cache so the new asset is detected). No native rebuild
  needed — it's a JS asset.
