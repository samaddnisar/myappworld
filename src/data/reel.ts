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
  handle: "kittybloomfamily",
  audioLabel: "Original audio",
  avatar:
    "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.82787-19/718553823_17892121578521462_9130251135081008297_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.flhe2-4.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2gFfr-CANzO3zBBhn4a62Aj-WMQpc-Z7lHFEhvg-A8JJPjAM8YXqinRgAUugwC6-pfI&_nc_ohc=pZ89ifdLvP0Q7kNvwGautzx&_nc_gid=z8heURZx_Zo7I_LUsigWZA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AQAqXwcXvuZC3AM25dOGeXZ_iUWhV-hcxpldHJFz5YXM0g&oe=6A4D88D7&_nc_sid=7a9f4b",
  // Placeholder sample clip — replace with your reel (bundled asset or CDN URL).
  video:
    "https://res.cloudinary.com/demo/video/upload/c_fill,h_1280,w_720/dog.mp4",
  thumbnail:
    "https://instagram.flhe2-4.fna.fbcdn.net/v/t51.71878-15/728627530_1542145164109476_173204968567943839_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzkyNTczMTg5NjcyNDI4MzM5MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fZGVmYXVsdF9jb3Zlcl9mcmFtZS5DMyJ9&_nc_ohc=udkg_WJaFUoQ7kNvwEm5Zfq&_nc_oc=AdrzIELVMrnrG_dGJGlyoAJbh5RC2n5pzF7yB7y83PtXVTuEPGtB9nQhfYAFnXnJGCU&_nc_ad=z-m&_nc_cid=1347&_nc_zt=23&_nc_ht=instagram.flhe2-4.fna&_nc_gid=HJylhQ6tqYcsAAWaWu65gQ&_nc_ss=7a22e&oh=00_AQCWhQWN-LL8ZXb_uLRz6euVS2SKK2Nuv-dkF5cR4Iu41w&oe=6A4D9A65",
  likes: "6.1K",
  comments: "16",
  reposts: "351",
  shares: "208",
  saves: "207",
  viewCount: "317K",
  insights: {
    views: "317,226",
    accountsReached: "269,646",
    avgWatchTime: "27.3s",
    follows: "336",
    viewsOverTime: {
      max: 400000,
      xLabels: ["17 Jun", "27 Jun", "8 Jul"],
      thisReel: [
        0, 220000, 240000, 260000, 280000, 300000, 320000, 340000, 360000,
        380000, 400000,
      ],
      typicalReel: [
        0, 100000, 110000, 115000, 120000, 130000, 140000, 150000, 200000,
        250000, 300000,
      ],
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
        { id: "profile-visits", label: "Profile visits", value: "336" },
        { id: "follows", label: "Follows", value: "331" },
      ],
      interactions: [
        { id: "likes", label: "Likes", value: "6,122" },
        { id: "comments", label: "Comments", value: "16" },
        { id: "reposts", label: "Reposts", value: "351" },
        { id: "shares", label: "Shares", value: "208" },
        { id: "saves", label: "Saves", value: "207" },
      ],
    },
    audience: {
      whoViewed: [
        { label: "Followers", value: "4.7%", percent: 4.7, tone: "magenta" },
        {
          label: "Non-followers",
          value: "95.3%",
          percent: 95.3,
          tone: "purple",
        },
      ],
      details: {
        Age: [
          { label: "13-17", value: "16.9%", percent: 16.9 },
          { label: "18-24", value: "20.1%", percent: 20.1 },
          { label: "25-34", value: "12.8%", percent: 12.8 },
          { label: "35-44", value: "12.7%", percent: 12.7 },
          { label: "45-54", value: "4.8%", percent: 4.8 },
          { label: "55-64", value: "1.8%", percent: 1.8 },
          { label: "65+", value: "1.5%", percent: 1.5 },
        ],
        Country: [
          { label: "Canada", value: "19.7%", percent: 19.7 },
          { label: "Uzbekistan", value: "17.3%", percent: 17.3 },
          { label: "UK", value: "14.9%", percent: 14.9 },
          { label: "USA", value: "10.1%", percent: 10.1 },
        ],
        Gender: [
          { label: "Men", value: "36.2%", percent: 36.2 },
          { label: "Women", value: "63.8%", percent: 63.8 },
        ],
      },
    },
  },
};
