import type { DashboardData } from "@/types";

/**
 * --- MOCK DATA ---
 * Static content for the Professional dashboard screen (screen 2).
 * `icon` values are semantic names from the registry in `src/lib/icons.ts`.
 */
export const dashboard: DashboardData = {
  title: "Professional dashb...",
  dateRange: "21 May-19 Jun",
  insights: [
    {
      id: "views",
      label: "Views",
      value: "19.9M",
      trending: true,
      route: "/views",
    },
    {
      id: "interactions",
      label: "Interactions",
      value: "398.1K",
      trending: true,
    },
    {
      id: "new-followers",
      label: "New followers",
      value: "3.8K",
      trending: true,
    },
    {
      id: "content-shared",
      label: "Content you shared",
      value: "67",
      trending: false,
    },
  ],
  tools: [
    {
      id: "monthly-recap",
      label: "Monthly recap",
      description: "See what you made happen last month.",
      icon: "toolMonthlyRecap",
      badge: "New",
    },
    {
      id: "best-practices",
      label: "Best practices",
      icon: "toolBestPractices",
    },
    { id: "inspiration", label: "Inspiration", icon: "toolInspiration" },
    {
      id: "creator-subscriptions",
      label: "Creator subscriptions",
      icon: "toolCreatorSubs",
    },
    {
      id: "branded-content",
      label: "Branded content",
      icon: "toolBrandedContent",
    },
    {
      id: "partnership-ads",
      label: "Partnership ads",
      icon: "toolPartnershipAds",
    },
    {
      id: "ad-tools",
      label: "Ad tools",
      icon: "adTools",
    },
  ],
};
