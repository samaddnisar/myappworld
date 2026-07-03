import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

import { colors } from "@/constants/colors";
import type { BreakdownSlice } from "@/data/views";

interface ViewsDonutProps {
  total: string;
  segments: BreakdownSlice[];
  size?: number;
  strokeWidth?: number;
  /** Visible gap between segments, in px. Tweak freely. */
  gap?: number;
}

const toneColor = (tone: BreakdownSlice["tone"]) =>
  tone === "magenta" ? colors.chartMagenta : colors.chartPurple;

/**
 * Donut chart: separated, round-capped arcs (one per breakdown slice).
 * The first slice (followers) starts at the top-center and runs clockwise.
 */
export function ViewsDonut({
  total,
  segments,
  size = 280,
  strokeWidth = 13,
  gap = 2,
}: ViewsDonutProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;

  // Round caps extend strokeWidth/2 past each end, so add strokeWidth to turn
  // the requested *visible* gap into the dash gap between segments.
  const dashGap = gap + strokeWidth;

  let cumulative = 0;
  const arcs = segments.map((s) => {
    const full = (s.percent / 100) * circ;
    const len = Math.max(0.01, full - dashGap); // inset both ends for the gap
    const offset = cumulative + dashGap / 2;
    cumulative += full;
    return { color: toneColor(s.tone), len, offset };
  });

  return (
    <View
      style={{ width: size, height: size }}
      className="items-center self-center justify-center"
    >
      <Svg width={size} height={size}>
        {arcs.map((a, i) => (
          <Circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${a.len} ${circ - a.len}`}
            strokeDashoffset={-a.offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        ))}
      </Svg>

      <View className="absolute items-center pb-7">
        <Text className="text-[15px] text-muted">Views</Text>
        <Text className="text-[30px] font-bold text-ink mt-1">{total}</Text>
      </View>
    </View>
  );
}
