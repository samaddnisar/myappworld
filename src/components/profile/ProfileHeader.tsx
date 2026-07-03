import { Text, View } from "react-native";

import { Avatar } from "@/components/ui/Avatar";
import { AVATAR } from "@/constants/layout";
import type { Profile } from "@/types";

import { ProfileNote } from "./ProfileNote";
import { ProfileStats } from "./ProfileStats";

/** Avatar (with floating note) on the left, display name + stats on the right. */
export function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <View className="px-4 pt-9">
      <View className="flex-row items-center">
        {/* Avatar + floating note bubble */}
        <View className="items-center">
          <View className="absolute z-10 -top-9">
            <ProfileNote text={profile.note} />
          </View>
          <Avatar
            uri={profile.avatar}
            size={AVATAR.profile}
            ring={profile.hasStory}
            showAddBadge
          />
        </View>

        {/* Display name + stats */}
        <View className="flex-1 ml-6">
          <Text className="mb-3 text-[16px]  text-ink">
            {profile.displayName}
          </Text>
          <ProfileStats stats={profile.stats} />
        </View>
      </View>
    </View>
  );
}
