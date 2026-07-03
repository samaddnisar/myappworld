import { View } from "react-native";

import { colors } from "@/constants/colors";

interface ProgressBarProps {
  /** 0–100. */
  percent: number;
  color?: string;
  /** Optional small leading cap of a different color (e.g. the magenta tip). */
  tipColor?: string;
  height?: number;
  trackColor?: string;
  /** Corner radius for the track + fill. Defaults to fully rounded (height / 2). */
  radius?: number;
  trackRadius?: number;
}

/** Rounded horizontal progress bar with an optional colored leading tip. */
export function ProgressBar({
  percent,
  color = colors.chartMagenta,
  tipColor,
  height = 8,
  trackColor = colors.surface,
  radius,
  trackRadius = 1000,
}: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, percent));
  const r = radius ?? height / 2;

  return (
    <View
      style={{
        height,
        borderRadius: trackRadius,
        backgroundColor: trackColor,
        overflow: "hidden",
      }}
    >
      {pct > 0 && (
        <View
          style={{
            height,
            width: `${pct}%`,
            minWidth: height,
            backgroundColor: tipColor ? undefined : color,
            borderTopRightRadius: r,
            borderBottomRightRadius: r,
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          {tipColor ? (
            <>
              {/* followers segment */}
              <View style={{ width: Math.max(4, height * 0.6), backgroundColor: tipColor }} />
              {/* 2px white barrier between the two colors */}
              <View style={{ width: 2, backgroundColor: colors.white }} />
              {/* non-followers segment */}
              <View style={{ flex: 1, backgroundColor: color }} />
            </>
          ) : null}
        </View>
      )}
    </View>
  );
}
