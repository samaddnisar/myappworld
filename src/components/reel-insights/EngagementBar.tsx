import { Image } from "expo-image";
import { Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { ReelData } from "@/data/reel";
import type { IconName } from "@/lib/icons";

function Metric({ icon, count }: { icon: IconName; count: string }) {
  return (
    <View className="items-center">
      <Icon name={icon} size={20} tintColor={colors.ink} />
      <Text className="text-[15px] text-ink mt-1.5">{count}</Text>
    </View>
  );
}

/** Reel thumbnail + the like/comment/repost/share/save counts row. */
export function EngagementBar({ reel }: { reel: ReelData }) {
  return (
    <View className="bg-bg">
      <View className="items-center pt-4 pb-5">
        <Image
          source={{ uri: reel.thumbnail }}
          style={{ width: 132, aspectRatio: 148 / 264, borderRadius: 12 }}
          contentFit="cover"
        />
      </View>
      <View className="flex-row justify-between px-8 pb-4">
        <Metric icon="heart" count={reel.likes} />
        <Metric icon="comment" count={reel.comments} />
        <Metric icon="repost" count={reel.reposts} />
        <Metric icon="share" count={reel.shares} />
        <Metric icon="bookmark" count={reel.saves} />
      </View>
    </View>
  );
}
