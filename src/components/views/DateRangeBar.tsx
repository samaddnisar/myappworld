import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

interface DateRangeBarProps {
  dateLabel: string;
  dateRange: string;
}

/** Sticky range selector row: "Last 30 days ▾" pill on the left, date range on the right. */
export function DateRangeBar({ dateLabel, dateRange }: DateRangeBarProps) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 border-b border-border/60">
      <Pressable className="flex-row items-center px-4 py-3.5 rounded-full bg-surface active:opacity-70">
        <Text className="text-[15px] font-medium text-ink mr-2">
          {dateLabel}
        </Text>
        <Icon name="chevronDown" size={12} tintColor={colors.ink} />
      </Pressable>
      <Text className="text-[17px] font-semibold text-ink">{dateRange}</Text>
    </View>
  );
}
