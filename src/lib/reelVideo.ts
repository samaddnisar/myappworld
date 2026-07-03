/**
 * Bundled reel video loader.
 *
 * Drop `reel.mp4` into `assets/videos/` for instant, offline playback (no
 * network wait). Auto-loaded at build time via Metro's `require.context`. Falls
 * back to the remote URL in the reel data when no local file is present.
 *
 * After adding/renaming the file, restart Metro with `npx expo start -c` so the
 * new asset is picked up. No native rebuild needed — it's a JS asset.
 */
const ctx = (
  require as { context: (d: string, r?: boolean, re?: RegExp) => RequireContext }
).context("../../assets/videos", false, /\.(mp4|mov|m4v)$/i);

interface RequireContext {
  keys: () => string[];
  (id: string): number;
}

const videos: Record<string, number> = {};
for (const key of ctx.keys()) {
  const name = key
    .replace(/^\.\//, "")
    .replace(/\.(mp4|mov|m4v)$/i, "");
  videos[name] = ctx(key);
}

/** Bundled `reel.mp4` asset (require id), or `undefined` if it hasn't been added yet. */
export function getBundledReel(): number | undefined {
  return videos["reel"];
}
