import { View } from "react-native";

import { Skeleton } from "@/components/ui/Skeleton";

type DimensionWidth = `${number}%` | number;

/** One "icon + text" placeholder row (mirrors a tool row). */
function SkeletonIconRow({
  barWidth,
  round = false,
}: {
  barWidth: DimensionWidth;
  /** Render the leading icon as a full circle (last group) instead of a square. */
  round?: boolean;
}) {
  return (
    <View className="flex-row items-center">
      <Skeleton width={32} height={32} radius={round ? 16 : 5} />
      <Skeleton width={barWidth} height={22} style={{ marginLeft: 16 }} />
    </View>
  );
}

/**
 * Loading placeholder for the Professional dashboard, matching the screen's
 * structure: title, then two label + rows groups.
 */
export function DashboardSkeleton() {
  return (
    <View className="flex-1 px-4 bg-bg opacity-40">
      {/* Title */}
      <View className="pt-3">
        <Skeleton width="62%" height={28} radius={10} />
      </View>

      {/* Insights label + metric rows */}
      <View className="mt-10">
        <Skeleton width="30%" height={18} />
      </View>
      <View className="mt-7" style={{ gap: 30 }}>
        <Skeleton width="100%" height={16} />
        <Skeleton width="100%" height={16} />
        <Skeleton width="100%" height={16} />
      </View>

      {/* Your tools label + rows (group 1) */}
      <View className="mt-12">
        <Skeleton width="30%" height={18} />
      </View>
      <View className="mt-6" style={{ gap: 26 }}>
        <SkeletonIconRow barWidth="58%" />
        <SkeletonIconRow barWidth="50%" />
        <SkeletonIconRow barWidth="55%" />
      </View>

      {/* Trailing label + rows (group 2) */}
      <View className="mt-10">
        <Skeleton width="30%" height={18} />
      </View>
      <View className="mt-6" style={{ gap: 26 }}>
        <SkeletonIconRow barWidth="52%" round />
        <SkeletonIconRow barWidth="48%" round />
      </View>
    </View>
  );
}
