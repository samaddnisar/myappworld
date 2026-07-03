import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { ToolItem } from "@/types";

/** A single "Your tools" row: icon, label (+ optional description), optional badge, chevron. */
export function ToolRow({ item }: { item: ToolItem }) {
  return (
    <Pressable className="flex-row items-center px-4 py-[17px] active:opacity-60">
      <Icon name={item.icon} size={28} tintColor={colors.ink} />
      <View className="flex-1 ml-4 ">
        <Text className="text-[19px] text-ink">{item.label}</Text>
        {item.description && (
          <Text className="text-[16px] leading-[18px] text-muted/70 mt-1">
            {item.description}
          </Text>
        )}
      </View>

      {item.badge && (
        <View className="px-3 py-[5px] mr-2 rounded-full bg-[#5769F1]">
          <Text className="text-sm text-white">{item.badge}</Text>
        </View>
      )}

      <Icon name="chevronRight" size={15} tintColor={colors.mutedLight} />
    </Pressable>
  );
}
