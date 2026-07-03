import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

interface MetricStatRowProps {
  label: string;
  value: string;
  /** Optional green delta below the value, e.g. "+7,116.8%". */
  delta?: string;
  /** Show an info icon after the label. */
  info?: boolean;
}

/** Generic "label … value (+delta)" row used for Accounts reached and Profile activity. */
export function MetricStatRow({
  label,
  value,
  delta,
  info,
}: MetricStatRowProps) {
  return (
    <Pressable className="flex-row items-start justify-between px-4 py-3.5 active:opacity-60">
      <View className="flex-row items-center">
        <Text className="text-[16px] text-ink">{label}</Text>
        {info && (
          <View className="ml-1">
            <Icon name="info" size={15} tintColor={colors.muted} />
          </View>
        )}
      </View>
      <View className="items-end">
        <Text className="text-[16px] text-ink">{value}</Text>
        {delta && (
          <Text
            className="text-[13px] mt-[3px] mb-[13px]"
            style={{ color: colors.success }}
          >
            {delta}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
