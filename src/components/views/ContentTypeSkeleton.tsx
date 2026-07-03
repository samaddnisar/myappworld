import { View } from "react-native";

import { Skeleton } from "@/components/ui/Skeleton";

/** Low-opacity placeholder shown in place of the "By content type" section while it "loads". */
export function ContentTypeSkeleton() {
  return (
    <View className="px-4 pt-3 opacity-30">
      {/* heading */}
      <Skeleton width="42%" height={20} radius={6} />

      {/* segmented pills */}
      <View className="flex-row mt-6" style={{ gap: 10 }}>
        <Skeleton width={70} height={38} radius={19} />
        <Skeleton width={104} height={38} radius={19} />
        <Skeleton width={128} height={38} radius={19} />
      </View>

      {/* bars */}
      <View className="mt-7" style={{ gap: 24 }}>
        <Skeleton width="100%" height={14} radius={6} />
        <Skeleton width="100%" height={14} radius={6} />
        <Skeleton width="100%" height={14} radius={6} />
      </View>
    </View>
  );
}
