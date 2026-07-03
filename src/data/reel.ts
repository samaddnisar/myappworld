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
  thumbnail:
    "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/726548551_27059362610356862_1337956092542644981_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzkyMjE1OTczNDkxMDAxMDQxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=f-DZ3yL7BagQ7kNvwHhKa77&_nc_oc=AdrUzQtueeQnKRBU67g5cYJq_e3NQwVgsympTaOomPwG9166u_FaRsRDuX9dSrQBrgA&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=O6hy_MnkiTekXOppjftw1A&_nc_ss=7a22e&oh=00_AQDVu5ebavrJbea-yGIY8r8z_z1Jb93sTfwPbmo55TlRWQ&oe=6A4DA596",
  likes: "18K",
  comments: "62K",
  reposts: "631",
  shares: "362",
  saves: "1.1K",
  viewCount: "1.7M",
  insights: {
    views: "1,725,859",
    accountsReached: "1,428,241",
    avgWatchTime: "28.7s",
    follows: "907",
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
        { id: "profile-visits", label: "Profile visits", value: "3,610" },
        { id: "follows", label: "Follows", value: "907" },
      ],
      interactions: [
        { id: "likes", label: "Likes", value: "17,918" },
        { id: "comments", label: "Comments", value: "62" },
        { id: "reposts", label: "Reposts", value: "631" },
        { id: "shares", label: "Shares", value: "362" },
        { id: "saves", label: "Saves", value: "1,142" },
      ],
    },
    audience: {
      whoViewed: [
        { label: "Followers", value: "1.4%", percent: 1.4, tone: "magenta" },
        {
          label: "Non-followers",
          value: "98.6%",
          percent: 98.6,
          tone: "purple",
        },
      ],
      details: {
        Age: [
          { label: "13-17", value: "6.8%", percent: 6.8 },
          { label: "18-24", value: "27.8%", percent: 27.8 },
          { label: "25-34", value: "38.3%", percent: 38.3 },
          { label: "35-44", value: "16.7%", percent: 16.7 },
          { label: "45-54", value: "6.8%", percent: 6.8 },
          { label: "55-64", value: "2.4%", percent: 2.4 },
          { label: "65+", value: "1.3%", percent: 1.3 },
        ],
        Country: [
          { label: "USA", value: "29.4%", percent: 29.4 },
          { label: "Iran", value: "4.6%", percent: 4.6 },
          { label: "Canada", value: "2.9%", percent: 2.9 },
          { label: "UK", value: "2.2%", percent: 2.2 },
        ],
        Gender: [
          { label: "Men", value: "36.2%", percent: 36.2 },
          { label: "Women", value: "63.8%", percent: 63.8 },
        ],
      },
    },
  },
};
