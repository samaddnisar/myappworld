import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

/** Sticky header for the Views screen: back / centered title / info. */
export function ViewsHeader({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-3 py-2">
      <View className="flex flex-row gap-10">
        <Pressable
          hitSlop={8}
          onPress={() => router.back()}
          className="p-1 active:opacity-60"
        >
          <Icon name="back" size={26} tintColor={colors.ink} />
        </Pressable>

        <Text className=" text-[24px] font-medium text-ink">{title}</Text>
      </View>
      <Pressable hitSlop={8} className="p-1 active:opacity-60">
        <Icon name="info" size={30} tintColor={colors.ink} />
      </Pressable>
    </View>
  );
}
