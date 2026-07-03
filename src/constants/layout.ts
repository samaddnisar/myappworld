/**
 * Layout constants used across screens. Centralized so spacing / grid metrics
 * can be tuned in one place.
 */

/** Posts grid configuration. */
export const GRID = {
  columns: 3,
  /** Gap *between* tiles, in px (no gap on the outer edges). */
  gap: 1.5,
  /** Aspect ratio of each thumbnail (width / height). 0.8 == 4:5 portrait. */
  // aspectRatio: 3 / 4,
  aspectRatio: 165 / 220,
} as const;

/** Common avatar sizes (px). */
export const AVATAR = {
  profile: 88,
  tab: 26,
} as const;
