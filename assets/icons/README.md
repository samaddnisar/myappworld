# App icons

Drop your PNG icons in **this folder**. They're loaded automatically at build
time (Metro `require.context`) and resolved by name in `src/lib/icons.ts`.

## Rules

- **Name each file exactly as listed below** (this is how the app finds it).
- Use **monochrome** art: a black shape on a **transparent** background. The app
  tints icons per context (active/inactive, white on thumbnails, green arrow…).
- Recommended size: **~96×96 px** (crisp up to ~32px on 3x screens). 50×50 works
  but may look soft on newer iPhones. Optionally ship `name@2x.png` / `name@3x.png`.
- After adding/renaming files, fully restart the bundler: `npx expo start -c`
  (the `-c` clears the cache so new files are detected).

## Required files

Profile top bar

- `add-icon.png` — the "+" (also reused for the avatar story badge)
- `chevron-down-icon.png`
- `threads-icon.png`
- `menu-icon.png`

Profile content tabs

- `grid-icon.png`
- `crown-icon.png`
- `reels-icon.png` — also reused in the bottom nav and on reel thumbnails
- `tagged-icon.png`

Thumbnails

- `play-icon.png` — the small view-count play glyph

Bottom navigation

- `home-icon.png`
- `activity-icon.png`
- `search-icon.png`
- (the profile tab uses the avatar image, not an icon)

Dashboard header / rows

- `back-icon.png`
- `settings-icon.png`
- `chevron-right-icon.png`
- `trending-up-icon.png` — the green ↗ arrow (provide black; app tints it green)
- `info-icon.png` — circled "i" (Views header & section titles)
- `filled-reels-icon.png` — solid reel glyph shown on thumbnails
- `top-content-reels-icon.png` — reel glyph on "By top content" cards
- `more-icon.png` — 3-dots (reel + insights headers)
- `insights-trend-icon.png` — trending line (reel insights header)
- `views-icon.png` — eye (view count on the reel)

Reel detail + engagement

- `music-icon.png` — music note (reel audio row)
- `mute-icon.png` — speaker/mute (reel bottom-right)
- `heart-icon.png`
- `comment-icon.png`
- `repost-icon.png`
- `share-icon.png` — paper plane
- `bookmark-icon.png`
- `skip-rate-icon.png` — clock/skip glyph ("What affects your views" row)

"Your tools" rows

- `monthly-recap-icon.png`
- `best-practices-icon.png`
- `inspiration-icon.png`
- `creator-subscriptions-icon.png`
- `branded-content-icon.png`
- `partnership-ads-icon.png`
- `ad-tools-icon.png`

Until a file is added, that icon renders as a blank space (no crash). To change
a filename or add a new icon slot, edit `ICON_FILES` in `src/lib/icons.ts`.
