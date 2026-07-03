/**
 * Centralized icon registry — backed by PNG assets in `assets/icons/`.
 *
 * HOW IT WORKS
 * - Drop a PNG into `assets/icons/` named exactly as listed in `ICON_FILES`
 *   below (e.g. `home-icon.png`). It's picked up automatically at build time via
 *   Metro's `require.context` — no code changes needed.
 * - Provide MONOCHROME icons (a black shape on a transparent background). The UI
 *   tints them per context (active/inactive, white on thumbnails, the green
 *   trend arrow, …) by passing `tintColor` to the <Icon /> component.
 * - Recommended source size: ~96×96 px (stays crisp up to ~32px on 3x screens).
 *
 * Call sites never import PNGs directly — they use <Icon name="..." /> with the
 * semantic names below, so swapping artwork is just dropping in a new file.
 */

// Auto-load every image in assets/icons, keyed by file name (without extension / @Nx suffix).
const ctx = (
  require as {
    context: (d: string, r?: boolean, re?: RegExp) => RequireContext;
  }
).context("../../assets/icons", false, /\.(png|jpg|jpeg)$/);

interface RequireContext {
  keys: () => string[];
  (id: string): number;
}

const assets: Record<string, number> = {};
for (const key of ctx.keys()) {
  const file = key
    .replace(/^\.\//, "")
    .replace(/\.(png|jpg|jpeg)$/i, "")
    .replace(/@\d+x$/i, "");
  assets[file] = ctx(key);
}

/** Semantic icon name → PNG file base name (the file you drop in `assets/icons/`). */
export const ICON_FILES = {
  // Profile top bar
  add: "add-icon",
  chevronDown: "chevron-down-icon",
  threads: "threads-icon",
  menu: "menu-icon",

  // Profile content tabs
  tabGrid: "grid-icon",
  tabCrown: "crown-icon",
  tabReels: "reels-icon",
  tabTagged: "tagged-icon",

  // Thumbnails
  play: "play-icon",
  thumbnailReels: "filled-reels-icon",
  topContentReels: "top-content-reels-icon",
  pin: "pin-icon",

  // Bottom navigation
  navHome: "home-icon",
  navReels: "reels-icon",
  navActivity: "activity-icon",
  navSearch: "search-icon",

  // Generic / navigation
  back: "back-icon",
  settings: "settings-icon",
  chevronRight: "chevron-right-icon",
  dashboardArrow: "trending-up-icon",
  info: "info-icon", // circled "i" (screen headers & section titles)
  more: "more-icon", // 3-dots
  insightsTrend: "insights-trend-icon", // trending line (reel insights header)
  views: "views-icon", // eye (view count)

  // Reel detail + engagement
  music: "music-icon",
  mute: "mute-icon",
  heart: "heart-icon",
  comment: "comment-icon",
  repost: "repost-icon",
  share: "share-icon",
  bookmark: "bookmark-icon",
  skipRate: "skip-rate-icon", // clock/skip glyph ("What affects your views")

  // Professional dashboard "Your tools"
  toolMonthlyRecap: "monthly-recap-icon",
  toolBestPractices: "best-practices-icon",
  toolInspiration: "inspiration-icon",
  toolCreatorSubs: "creator-subscriptions-icon",
  toolBrandedContent: "branded-content-icon",
  toolPartnershipAds: "partnership-ads-icon",
  adTools: "ad-tools-icon",
} as const;

export type IconName = keyof typeof ICON_FILES;

/** Resolved image source for an icon, or `undefined` if the PNG hasn't been added yet. */
export function getIconSource(name: IconName): number | undefined {
  return assets[ICON_FILES[name]];
}
