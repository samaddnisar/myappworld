import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { Skeleton } from "@/components/ui/Skeleton";
import { colors } from "@/constants/colors";
import type { RatePoint, ReelInsightsData } from "@/data/reel";

function RateRow({ item }: { item: RatePoint }) {
  return (
    <Pressable className="flex-row items-center py-3.5 active:opacity-60">
      <View className="items-center justify-center w-12 h-12 rounded-full bg-surface">
        <Icon name={item.icon} size={22} tintColor={colors.ink} />
      </View>
      <Text className="flex-1 ml-3 text-[14px] text-ink">{item.label}</Text>
      <Text className="text-[15px]  text-ink">{item.rate}</Text>
    </Pressable>
  );
}

/** "What affects your views" — rate rows (skip / share / like / save). */
export function WhatImpactsSection({
  insights,
  loading,
}: {
  insights: ReelInsightsData;
  loading: boolean;
}) {
  return (
    <View className="px-4 pb-6 pt-7">
      <View className="flex-row items-center pb-2">
        <Text className="text-[18px] text-ink">What affects your views</Text>
        <View className="ml-1.5">
          <Icon name="info" size={19} />
        </View>
      </View>

      {loading ? (
        <View className="pt-3" style={{ gap: 12 }}>
          <Skeleton width="90%" height={16} opacity={0.3} />
          <Skeleton width="70%" height={16} opacity={0.3} />
        </View>
      ) : (
        <View>
          <Text className="text-[13px] text-muted pb-0">
            {insights.affectsSubtitle}
          </Text>
          {insights.affectsViews.map((item) => (
            <RateRow key={item.id} item={item} />
          ))}
        </View>
      )}
    </View>
  );
}
