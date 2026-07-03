/**
 * Raw color tokens. These mirror the semantic palette in `tailwind.config.js`.
 *
 * Use Tailwind/NativeWind classes (e.g. `text-muted`) in JSX wherever possible.
 * Import from here only when a raw color value is required — vector icon
 * `color` props, gradients, the native status bar, etc.
 */
export const colors = {
  accent: '#FF3040', // notification red (dots & badges)
  link: '#0095F6', // action blue
  success: '#3E8648', // green trending-up arrow

  // Insights charts
  chartPurple: '#5B1ED9', // non-followers / Women
  chartMagenta: '#CA30C5', // followers / default progress bars

  bg: '#FFFEFF',
  surface: '#F4F3F5',
  surfaceAlt: '#F4F3F5', // light pill-button background
  border: '#DBDBDB',
  storyRing: '#EAEAEF', // solid ring around the profile avatar
  skeleton: '#E9E9EC', // skeleton placeholder fill
  skeletonHighlight: '#F6F6F8', // moving shimmer band

  ink: '#000000', // primary text / active icons
  inkSoft: '#262626',
  muted: '#737373', // secondary text & inactive icons
  mutedLight: '#8E8E8E',

  white: '#FFFFFF',
} as const;

/** Instagram-style unseen-story gradient (top-left → bottom-right). */
export const storyGradient = [
  '#FEDA75',
  '#FA7E1E',
  '#D62976',
  '#962FBF',
  '#4F5BD5',
] as const;

export type ColorToken = keyof typeof colors;
