import { Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import type { LabeledStat, ReelInsightsData } from "@/data/reel";

function SectionTitle({ title }: { title: string }) {
  return (
    <View className="flex-row items-center pb-1">
      <Text className="text-[18px] font-medium text-ink">{title}</Text>
      <View className="ml-1.5">
        <Icon name="info" size={19} />
      </View>
    </View>
  );
}

function StatRow({ item }: { item: LabeledStat }) {
  return (
    <View className="flex-row items-center justify-between py-3.5">
      <Text className="text-[16px] text-ink/85">{item.label}</Text>
      <Text className="text-[16px] text-ink/">{item.value}</Text>
    </View>
  );
}

/** Engagement tab — actions after viewing, interactions, and (pending) likes-over-time. */
export function EngagementSection({
  insights,
}: {
  insights: ReelInsightsData;
}) {
  const { actions, interactions } = insights.engagement;

  return (
    <View className="px-4 pt-6">
      <SectionTitle title="Actions after viewing" />
      {actions.map((item) => (
        <StatRow key={item.id} item={item} />
      ))}

      <View className="pt-8">
        <SectionTitle title="Interactions" />
      </View>
      {interactions.map((item) => (
        <StatRow key={item.id} item={item} />
      ))}

      <View className="pt-8">
        <SectionTitle title="When people liked your reel" />
      </View>
      {/* Chart pending the full design screenshot. */}
      <View className="mt-3 h-36 rounded-2xl bg-surface" />
    </View>
  );
}
