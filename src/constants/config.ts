/**
 * App-wide tunables. Centralized so behavior can be adjusted in one place.
 */

/** Skeleton loader timing. */
export const SKELETON = {
  /** How long the loading skeleton stays visible before content appears (ms). */
  visibleMs: 500,
  /** Duration of one left → right shimmer sweep (ms). Lower = faster wave. */
  shimmerMs: 1100,
} as const;

/**
 * Views screen staged reveal. The screen renders in steps, each `stepMs` apart:
 *   1. header + donut only
 *   2. + breakdown / accounts reached / top content / audience / activity,
 *      with "By content type" shown as a faint skeleton
 *   3. "By content type" renders its real content (fully loaded)
 */
export const VIEWS_REVEAL = {
  /** Delay between each reveal step (ms). */
  stepMs: 100,
} as const;

/** Reel detail screen slide-in transition. */
export const REEL_TRANSITION = {
  /** Fraction of screen width the screen starts offset to the right (0.1 = 10%). */
  startOffset: 0,
  /** Slide duration (ms). */
  durationMs: 100,
} as const;

/**
 * Reel insights screen loading phases:
 *   spinner (spinnerMs) → skeleton (skeletonMs) → content fades in (fadeMs).
 */
export const REEL_INSIGHTS = {
  spinnerMs: 500,
  skeletonMs: 500,
  fadeMs: 300,
} as const;
