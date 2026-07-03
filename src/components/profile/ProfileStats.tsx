import { Text, View } from "react-native";

import type { ProfileStats as ProfileStatsType } from "@/types";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View className="items-start flex-1">
      <Text className="text-lg font-medium text-ink">{value}</Text>
      <Text className="text-[15px] text-ink-soft">{label}</Text>
    </View>
  );
}

/** Posts / followers / following counts shown beside the avatar. */
export function ProfileStats({ stats }: { stats: ProfileStatsType }) {
  return (
    <View className="flex-row">
      <Stat value={stats.posts} label="posts" />
      <Stat value={stats.followers} label="followers" />
      <Stat value={stats.following} label="following" />
    </View>
  );
}
