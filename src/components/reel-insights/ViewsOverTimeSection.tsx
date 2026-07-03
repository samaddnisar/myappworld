import { useState } from "react";
import { Text, View } from "react-native";

import { FadeInView } from "@/components/ui/FadeInView";
import { FilterPills } from "@/components/ui/FilterPills";
import { Icon } from "@/components/ui/Icon";
import { Skeleton } from "@/components/ui/Skeleton";
import { REEL_INSIGHTS } from "@/constants/config";
import type { ReelInsightsData } from "@/data/reel";

import { ViewsGraph } from "./ViewsGraph";

const FILTERS = ["All", "Followers", "Non-followers"] as const;

/** "Views over time" — filter pills + two-line graph. Skeleton while loading, then fades in. */
export function ViewsOverTimeSection({
  insights,
  loading,
}: {
  insights: ReelInsightsData;
  loading: boolean;
}) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  return (
    <View className="px-4 pt-7">
      <View className="flex-row items-center pb-4">
        <Text className="text-[18px] text-ink">Views over time</Text>
        <View className="ml-1.5">
          <Icon name="info" size={19} />
        </View>
      </View>

      {loading ? (
        <View style={{ gap: 14 }}>
          <Skeleton width="55%" height={16} opacity={0.3} />
          <Skeleton width="100%" height={20} radius={10} opacity={0.3} />
        </View>
      ) : (
        <FadeInView duration={REEL_INSIGHTS.fadeMs}>
          <FilterPills options={FILTERS} active={filter} onChange={setFilter} />
          <View className="mt-[65px]">
            <ViewsGraph data={insights.viewsOverTime} />
          </View>
        </FadeInView>
      )}
    </View>
  );
}
