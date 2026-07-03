import { Text, View } from "react-native";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { colors } from "@/constants/colors";
import type { ContentTypeStat } from "@/data/views";

import { SegmentedControl } from "./SegmentedControl";

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <View className="flex-row items-center">
      <View
        className="size-[8px] rounded-full mr-[5px]"
        style={{ backgroundColor: color }}
      />
      <Text className="text-[15px] text-muted">{label}</Text>
    </View>
  );
}

/** "By content type" — segmented pills, Reels/Stories/Posts bars, and a legend. */
export function ContentTypeSection({
  contentTypes,
}: {
  contentTypes: ContentTypeStat[];
}) {
  return (
    <View className="pt-3">
      <Text className="px-4 text-[20px] text-ink pb-5">By content type</Text>

      <SegmentedControl />

      <View className="px-4 pt-6" style={{ gap: 20 }}>
        {contentTypes.map((ct) => (
          <View key={ct.label}>
            <Text className="text-[16px] text-ink/90 mb-[4px]">{ct.label}</Text>
            <View className="flex-row items-center">
              <View className="flex-1">
                <ProgressBar
                  percent={ct.percent}
                  color={colors.chartPurple}
                  tipColor={colors.chartMagenta}
                  height={10}
                  radius={3}
                />
              </View>
              <Text className="ml-3 w-[70px] text-right text-[17px]  text-ink">
                {ct.value}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View className="flex-row justify-center pt-7" style={{ gap: 28 }}>
        <LegendDot color={colors.chartMagenta} label="Followers" />
        <LegendDot color={colors.chartPurple} label="Non-followers" />
      </View>
    </View>
  );
}
