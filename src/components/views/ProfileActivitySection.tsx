import { Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { viewsData } from "@/data/views";
import { MetricStatRow } from "./MetricStatRow";

type ProfileActivity = (typeof viewsData)["profileActivity"];

/** "Profile activity" — total + comparison + delta, then activity rows. */
export function ProfileActivitySection({ data }: { data: ProfileActivity }) {
  return (
    <View className="pt-8">
      <View className="flex-row items-center justify-between px-4">
        <View className="flex-row items-center">
          <Text className="text-[20px]  text-ink">Profile activity</Text>
          <View className="ml-1.5">
            <Icon name="info" size={22} />
          </View>
        </View>
        <Text className="text-[20px]  text-ink">{data.total}</Text>
      </View>

      <View className="flex-row items-center justify-between px-4 mt-0.5">
        <Text className="text-[15px] text-muted">{data.comparison}</Text>
        <Text className="text-[14px]" style={{ color: colors.success }}>
          {data.delta}
        </Text>
      </View>

      <View className="pt-5">
        {data.rows.map((row) => (
          <MetricStatRow
            key={row.id}
            label={row.label}
            value={row.value}
            delta={row.delta}
          />
        ))}
      </View>
    </View>
  );
}
