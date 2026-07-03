import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

/** Top bar for the Professional dashboard: back / title / settings. */
export function DashboardHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-3 py-2">
      <Pressable
        hitSlop={8}
        onPress={() => router.back()}
        className="p-1 active:opacity-60"
      >
        <Icon name="back" size={26} tintColor={colors.ink} />
      </Pressable>
      <Text
        numberOfLines={1}
        className="flex-1 mx-2 absolute left-1/2 -translate-x-1/2 text-[24px] font-semibold text-ink"
      >
        {title}
      </Text>
      <Pressable hitSlop={8} className="p-1 active:opacity-60">
        <Icon name="settings" size={24} tintColor={colors.ink} />
      </Pressable>
    </View>
  );
}
