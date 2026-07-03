/**
 * Shared domain types for the app.
 * Keep these UI-agnostic so screens, components and mock data all align.
 */

export type PostType = "image" | "reel";

export interface Post {
  id: string;
  /** Remote (or local) image uri used as the grid thumbnail. */
  image: string;
  type: PostType;
  /** Pre-formatted view/play count, e.g. "746K" or "6,651". */
  views?: string;
  pinned?: boolean;
}

export interface ProfileStats {
  /** Pre-formatted so the UI never has to do number formatting. */
  posts: string;
  followers: string;
  following: string;
}

export interface ProfessionalDashboard {
  /** Pre-formatted, e.g. "26.9M". */
  views: string;
  /** e.g. "the last 30 days". */
  period: string;
}

/** A single "Insights" metric row on the Professional dashboard. */
export interface InsightItem {
  id: string;
  label: string;
  /** Pre-formatted value, e.g. "19.9M". */
  value: string;
  /** Whether to show the green trending-up arrow. */
  trending: boolean;
  /** Optional route to open when the row is tapped (e.g. "/views"). */
  route?: import("expo-router").Href;
}

/** A single "Your tools" row on the Professional dashboard. */
export interface ToolItem {
  id: string;
  label: string;
  description?: string;
  /** Semantic icon name from the icon registry (`src/lib/icons.ts`). */
  icon: import("@/lib/icons").IconName;
  /** Optional pill badge, e.g. "New". */
  badge?: string;
}

export interface DashboardData {
  /** Header title (may be truncated by the UI). */
  title: string;
  /** Insights date range, e.g. "21 May-19 Jun". */
  dateRange: string;
  insights: InsightItem[];
  tools: ToolItem[];
}

export interface Profile {
  /** Handle shown in the top bar (can be truncated by the UI), e.g. "kittybloomfairy". */
  handle: string;
  /** Display name shown next to the avatar, e.g. "FruitGala". */
  displayName: string;
  /** Professional category label shown in grey, e.g. "Digital creator". */
  category: string;
  /** Bio rendered one entry per line. */
  bio: string[];
  /** Story "note" bubble text floating above the avatar. */
  note: string;
  /** Avatar image uri. */
  avatar: string;
  /** Whether the avatar shows the unseen-story gradient ring. */
  hasStory: boolean;
  stats: ProfileStats;
  dashboard: ProfessionalDashboard;
  /** Count for the unread indicator in the top bar / tab bar. */
  unreadActivity?: number;
}
