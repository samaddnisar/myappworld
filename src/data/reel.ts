/**
 * --- MOCK DATA ---
 * The reel opened from the profile grid, plus its "Reel insights".
 *
 * `video` can be a remote URL (as here) or a bundled asset path. For insanely
 * fast delivery either bundle a few short clips in `assets/videos/` (zero
 * network) or serve HLS from a video CDN (Bunny Stream / Cloudflare Stream / Mux)
 * — see the note passed back in chat. Swap the URL below when you have the reel.
 */

import type { IconName } from "@/lib/icons";

/** A labelled percentage bar (audience details, who-viewed, etc.). */
export interface BarStat {
  label: string;
  /** Pre-formatted, e.g. "39.7%". */
  value: string;
  percent: number;
}

/** "Who viewed your reel" row (colored by follower type). */
export interface WhoViewedStat extends BarStat {
  tone: "magenta" | "purple";
}

/** A simple label → value row (Engagement lists). */
export interface LabeledStat {
  id: string;
  label: string;
  value: string;
}

/** A "What affects your views" rate row. */
export interface RatePoint {
  id: string;
  label: string;
  /** Pre-formatted, e.g. "43.4%". */
  rate: string;
  icon: IconName;
}

/** Two-series graph data for "Views over time". */
export interface ViewsOverTime {
  max: number;
  xLabels: string[];
  thisReel: number[];
  typicalReel: number[];
}

export type AudienceFilter = "Age" | "Country" | "Gender";

export interface ReelInsightsData {
  views: string;
  accountsReached: string;
  avgWatchTime: string;
  follows: string;
  viewsOverTime: ViewsOverTime;

  /** "What affects your views". */
  affectsSubtitle: string;
  affectsViews: RatePoint[];

  /** Engagement tab. */
  engagement: {
    actions: LabeledStat[];
    interactions: LabeledStat[];
  };

  /** Audience tab. */
  audience: {
    whoViewed: WhoViewedStat[];
    details: Record<AudienceFilter, BarStat[]>;
  };
}

export interface ReelData {
  handle: string;
  audioLabel: string;
  avatar: string;
  /** Remote URL or bundled path for the reel video. */
  video: string;
  /** Poster/thumbnail shown on the insights screen. */
  thumbnail: string;
  likes: string;
  comments: string;
  reposts: string;
  shares: string;
  saves: string;
  /** View count shown under the video, e.g. "387". */
  viewCount: string;
  insights: ReelInsightsData;
}

export const reel: ReelData = {
  handle: "fruitsstoryita",
  audioLabel: "Original audio",
  avatar: "https://picsum.photos/seed/fruitsstoryita/80/80",
  // Placeholder sample clip — replace with your reel (bundled asset or CDN URL).
  video:
    "https://res.cloudinary.com/demo/video/upload/c_fill,h_1280,w_720/dog.mp4",
  thumbnail: "https://picsum.photos/seed/reel-supermarket/540/720",
  likes: "1",
  comments: "0",
  reposts: "0",
  shares: "0",
  saves: "0",
  viewCount: "387",
  insights: {
    views: "387",
    accountsReached: "342",
    avgWatchTime: "11s",
    follows: "0",
    viewsOverTime: {
      max: 400,
      xLabels: ["2 May", "12 May", "23 May"],
      thisReel: [0, 330, 342, 348, 352, 355, 357, 359, 361, 363, 365],
      typicalReel: [0, 150, 162, 170, 176, 181, 186, 190, 194, 197, 200],
    },
    affectsSubtitle: "Rates are listed in order of importance to reach.",
    affectsViews: [
      { id: "skip", label: "Skip rate", rate: "43.4%", icon: "skipRate" },
      { id: "share", label: "Share rate", rate: "0.0%", icon: "share" },
      { id: "like", label: "Like rate", rate: "0.3%", icon: "heart" },
      { id: "save", label: "Save rate", rate: "0.0%", icon: "bookmark" },
    ],
    engagement: {
      actions: [
        { id: "profile-visits", label: "Profile visits", value: "1" },
        { id: "follows", label: "Follows", value: "0" },
      ],
      interactions: [
        { id: "likes", label: "Likes", value: "1" },
        { id: "comments", label: "Comments", value: "0" },
        { id: "reposts", label: "Reposts", value: "0" },
        { id: "shares", label: "Shares", value: "0" },
        { id: "saves", label: "Saves", value: "0" },
      ],
    },
    audience: {
      whoViewed: [
        { label: "Followers", value: "4.2%", percent: 4.2, tone: "magenta" },
        {
          label: "Non-followers",
          value: "95.8%",
          percent: 95.8,
          tone: "purple",
        },
      ],
      details: {
        Age: [
          { label: "13-17", value: "1.1%", percent: 1.1 },
          { label: "18-24", value: "39.7%", percent: 39.7 },
          { label: "25-34", value: "37.7%", percent: 37.7 },
          { label: "35-44", value: "14.9%", percent: 14.9 },
          { label: "45-54", value: "3.6%", percent: 3.6 },
          { label: "55-64", value: "1.7%", percent: 1.7 },
          { label: "65+", value: "1.4%", percent: 1.4 },
        ],
        Country: [
          { label: "USA", value: "69.4%", percent: 69.4 },
          { label: "Iran", value: "3.6%", percent: 3.6 },
          { label: "Brazil", value: "2.9%", percent: 2.9 },
          { label: "Uzbekistan", value: "2.2%", percent: 2.2 },
        ],
        Gender: [
          { label: "Men", value: "36.2%", percent: 36.2 },
          { label: "Women", value: "63.8%", percent: 63.8 },
        ],
      },
    },
  },
};
