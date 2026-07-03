import { Text, View } from "react-native";

import { colors } from "@/constants/colors";
import type { BreakdownSlice } from "@/data/views";

/** Followers / Non-followers rows with colored dots + percent (under the donut). */
export function BreakdownLegend({ segments }: { segments: BreakdownSlice[] }) {
  return (
    <View className="px-4 pt-3 mb-7">
      {segments.map((s) => (
        <View
          key={s.label}
          className="flex-row items-center justify-between py-3"
        >
          <View className="flex-row items-center">
            <View
              className="mr-[5px] rounded-full size-[8px]"
              style={{
                backgroundColor:
                  s.tone === "magenta"
                    ? colors.chartMagenta
                    : colors.chartPurple,
              }}
            />
            <Text className="text-[16px] text-ink">{s.label}</Text>
          </View>
          <Text className="text-[16px] text-ink">{s.value}</Text>
        </View>
      ))}
    </View>
  );
}
