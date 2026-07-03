import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

/** Header for the Reel insights screen: back / title / trend + more. */
export function ReelInsightsHeader() {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-3 py-2">
      <View className="flex-row items-center">
        <Pressable
          hitSlop={8}
          onPress={() => router.back()}
          className="p-1 active:opacity-60"
        >
          <Icon name="back" size={24} tintColor={colors.ink} />
        </Pressable>
        <Text className="ml-5 text-[20px] font-medium text-ink">
          Reel insights
        </Text>
      </View>
      <View className="flex-row items-center">
        <Pressable hitSlop={8} className="p-1 mr-3 active:opacity-60">
          <Icon name="insightsTrend" size={24} tintColor={colors.ink} />
        </Pressable>
        <Pressable hitSlop={8} className="p-1 active:opacity-60">
          <Icon name="more" size={16} tintColor={colors.ink} />
        </Pressable>
      </View>
    </View>
  );
}
