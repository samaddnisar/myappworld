import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { ProfessionalDashboard as Dashboard } from "@/types";

interface ProfessionalDashboardProps {
  dashboard: Dashboard;
  onPress?: () => void;
}

/** Tappable "Professional dashboard" summary card. */
export function ProfessionalDashboard({
  dashboard,
  onPress,
}: ProfessionalDashboardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="px-4 py-3 mx-4 mt-4 rounded-xl bg-surface active:opacity-80"
    >
      <Text className="text-[15px] font-medium text-ink-soft">
        Professional dashboard
      </Text>
      <View className="flex-row items-center mt-1">
        <Icon name="dashboardArrow" size={8} tintColor={colors.success} />
        <Text className="ml-1.5 text-[13px] text-muted">
          {dashboard.views} views in {dashboard.period}.
        </Text>
      </View>
    </Pressable>
  );
}
