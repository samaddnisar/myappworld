import { Text, View } from "react-native";

import type { InsightItem } from "@/types";

import { InsightRow } from "./InsightRow";

interface InsightsSectionProps {
  dateRange: string;
  insights: InsightItem[];
}

/** "Insights" heading + date range, followed by the metric rows. */
export function InsightsSection({ dateRange, insights }: InsightsSectionProps) {
  return (
    <View className="pt-1">
      <View className="flex-row items-center justify-between px-4 pt-3 pb-1">
        <Text className="text-[19px] font-bold text-ink pb-5">Insights</Text>
        <Text className="text-[15px] text-muted">{dateRange}</Text>
      </View>
      {insights.map((item) => (
        <InsightRow key={item.id} item={item} />
      ))}
    </View>
  );
}
