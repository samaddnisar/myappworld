import { Text, View } from "react-native";

import { FadeInView } from "@/components/ui/FadeInView";
import { Icon } from "@/components/ui/Icon";
import { Skeleton } from "@/components/ui/Skeleton";
import { REEL_INSIGHTS } from "@/constants/config";
import type { ReelInsightsData } from "@/data/reel";

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <View
      className="px-4 py-4 rounded-[10px] bg-surface"
      style={{ width: "48%" }}
    >
      <Text className="text-[12px] text-muted">{label}</Text>
      <Text className="text-[20px] font-medium text-ink mt-3">{value}</Text>
    </View>
  );
}

/** "Summary" — 4 stat cards. Skeleton while loading, then fades in. */
export function SummarySection({
  insights,
  loading,
}: {
  insights: ReelInsightsData;
  loading: boolean;
}) {
  return (
    <View className="px-4 pt-6">
      <View className="flex-row items-center pb-6">
        <Text className="text-[18px]  text-ink">Summary</Text>
        <View className="ml-1.5">
          <Icon name="info" size={19} />
        </View>
      </View>

      {loading ? (
        <View
          className="flex-row flex-wrap justify-between"
          style={{ rowGap: 12 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              width="48%"
              opacity={0.3}
              height={92}
              radius={16}
            />
          ))}
        </View>
      ) : (
        <FadeInView duration={REEL_INSIGHTS.fadeMs}>
          <View
            className="flex-row flex-wrap justify-between"
            style={{ rowGap: 12 }}
          >
            <SummaryCard label="Views" value={insights.views} />
            <SummaryCard
              label="Accounts reached"
              value={insights.accountsReached}
            />
            <SummaryCard
              label="Average watch time"
              value={insights.avgWatchTime}
            />
            <SummaryCard label="Follows" value={insights.follows} />
          </View>
        </FadeInView>
      )}
    </View>
  );
}
