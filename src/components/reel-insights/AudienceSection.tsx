import { useState } from "react";
import { Text, View } from "react-native";

import { FilterPills } from "@/components/ui/FilterPills";
import { Icon } from "@/components/ui/Icon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { colors } from "@/constants/colors";
import type { AudienceFilter, BarStat, ReelInsightsData } from "@/data/reel";

const FILTERS = ["Age", "Country", "Gender"] as const;

function SectionTitle({ title }: { title: string }) {
  return (
    <View className="flex-row items-center pb-3 ">
      <Text className="text-[17px] text-ink">{title}</Text>
      <View className="ml-1.5">
        <Icon name="info" size={19} />
      </View>
    </View>
  );
}

function BarRow({ item, color }: { item: BarStat; color: string }) {
  return (
    <View className="pt-4">
      <Text className="text-[14px] text-ink/75 mb-[5px]">{item.label}</Text>
      <View className="flex-row items-center">
        <View className="flex-1">
          <ProgressBar
            percent={item.percent}
            color={color}
            height={8}
            radius={3}
            trackRadius={3}
          />
        </View>
        <Text className="ml-4 w-[68px] text-right text-[15px]  text-ink">
          {item.value}
        </Text>
      </View>
    </View>
  );
}

/** Audience tab — who viewed the reel + a filterable (Age/Country/Gender) breakdown. */
export function AudienceSection({ insights }: { insights: ReelInsightsData }) {
  const [filter, setFilter] = useState<AudienceFilter>("Age");
  const details = insights.audience.details[filter];

  return (
    <View className="px-4 pt-8">
      <SectionTitle title="Who viewed your reel" />
      {insights.audience.whoViewed.map((item) => (
        <BarRow
          key={item.label}
          item={item}
          color={
            item.tone === "purple" ? colors.chartPurple : colors.chartMagenta
          }
        />
      ))}

      <View className="pt-9">
        <SectionTitle title="Audience details" />
      </View>
      <View className="pt-3">
        <FilterPills options={FILTERS} active={filter} onChange={setFilter} />
      </View>

      {details.map((item) => (
        <BarRow
          key={item.label}
          item={item}
          // Gender: Women uses the purple tone; everything else is magenta.
          color={
            filter === "Gender" && item.label === "Women"
              ? colors.chartPurple
              : colors.chartMagenta
          }
        />
      ))}
    </View>
  );
}
