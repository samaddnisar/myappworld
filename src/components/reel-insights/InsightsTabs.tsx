import { Pressable, Text, View } from "react-native";

export type InsightsTab = "Overview" | "Engagement" | "Audience";

const TABS: InsightsTab[] = ["Overview", "Engagement", "Audience"];

interface InsightsTabsProps {
  active: InsightsTab;
  onChange: (tab: InsightsTab) => void;
}

/** Sticky Overview / Engagement / Audience tabs. */
export function InsightsTabs({ active, onChange }: InsightsTabsProps) {
  return (
    <View className="flex-row border-b bg-bg border-border">
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <Pressable
            key={tab}
            onPress={() => onChange(tab)}
            className={`flex-1 items-center py-3.5 mx-5 border-b-2 ${
              isActive ? "border-ink" : "border-transparent"
            }`}
          >
            <Text
              className={`text-[14px] font-medium ${isActive ? " text-ink" : "text-muted"}`}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
