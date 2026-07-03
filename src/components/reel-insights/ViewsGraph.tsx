import { Text, useWindowDimensions, View } from "react-native";

import { colors } from "@/constants/colors";
import type { ViewsOverTime } from "@/data/reel";

import { LineChart } from "./LineChart";

const Y_AXIS_WIDTH = 30;
const CHART_HEIGHT = 150;

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <View className="flex-row items-center">
      <View
        className="mr-[5px] rounded-full size-[7px]"
        style={{ backgroundColor: color }}
      />
      <Text className="text-[13px] text-muted">{label}</Text>
    </View>
  );
}

/** "Views over time" graph: this reel (solid magenta) vs typical reel (dashed grey), with axes + legend. */
export function ViewsGraph({ data }: { data: ViewsOverTime }) {
  const { width } = useWindowDimensions();
  const chartWidth = width - 32 - Y_AXIS_WIDTH - 8; // px-4 + y-axis + gap
  const yLabels = [data.max, Math.round(data.max / 2), 0];

  return (
    <View>
      <View className="flex-row">
        {/* Y axis */}
        <View
          style={{ width: Y_AXIS_WIDTH, height: CHART_HEIGHT }}
          className="items-end justify-between"
        >
          {yLabels.map((l) => (
            <Text key={l} className="text-[13px] text-muted">
              {l}
            </Text>
          ))}
        </View>

        {/* Chart + X axis */}
        <View style={{ width: chartWidth }} className="ml-2">
          <LineChart
            series={[
              {
                data: data.typicalReel,
                color: colors.mutedLight,
                dashed: true,
                strokeWidth: 2.5,
              },
              {
                data: data.thisReel,
                color: colors.chartMagenta,
                strokeWidth: 3.5,
              },
            ]}
            max={data.max}
            width={chartWidth}
            height={CHART_HEIGHT}
            gridValues={yLabels}
          />
          <View className="flex-row justify-between mt-2">
            {data.xLabels.map((l) => (
              <Text key={l} className="text-[13px] text-muted">
                {l}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* Legend */}
      <View className="flex-row mt-5" style={{ gap: 24 }}>
        <LegendItem color={colors.chartMagenta} label="This reel" />
        <LegendItem color={colors.mutedLight} label="Your typical reel" />
      </View>
    </View>
  );
}
