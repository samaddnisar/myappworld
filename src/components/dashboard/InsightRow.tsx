import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { InsightItem } from "@/types";

/** A single Insights metric row: label on the left, value (+ trend arrow) + chevron on the right. */
export function InsightRow({ item }: { item: InsightItem }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => item.route && router.push(item.route)}
      className="flex-row items-center justify-between px-4 py-5 active:opacity-60"
    >
      <Text className="text-[17px] text-ink-soft">{item.label}</Text>

      <View className="flex-row items-center">
        {item.trending && (
          <Icon name="dashboardArrow" size={13} tintColor={colors.success} />
        )}
        <Text
          className={`text-[18px]  text-ink ${item.trending ? "ml-[9px]" : ""}`}
        >
          {item.value}
        </Text>
        <View className="ml-1.5">
          <Icon name="chevronRight" size={14} tintColor={colors.mutedLight} />
        </View>
      </View>
    </Pressable>
  );
}
