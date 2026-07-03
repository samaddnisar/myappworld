import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsGrid } from "@/components/profile/PostsGrid";
import { ProfessionalDashboard } from "@/components/profile/ProfessionalDashboard";
import { ProfileActions } from "@/components/profile/ProfileActions";
import { ProfileBio } from "@/components/profile/ProfileBio";
import {
  ProfileContentTabs,
  type ContentTab,
} from "@/components/profile/ProfileContentTabs";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTopBar } from "@/components/profile/ProfileTopBar";
import { useAppData } from "@/store/appData";

/**
 * Screen 1 — Profile.
 *
 * Currently mapped to the index route ("/") so the app launches straight onto
 * this screen. When the Home feed screen is built, move this to `profile.tsx`
 * and make Home the index route.
 */
export default function ProfileScreen() {
  const router = useRouter();
  const { data } = useAppData();
  const { profile, posts } = data;
  const [activeTab, setActiveTab] = useState<ContentTab>("grid");

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      {/* Fixed top bar */}
      <ProfileTopBar handle={profile.handle} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ProfileHeader profile={profile} />
        <ProfileBio category={profile.category} bio={profile.bio} />
        <ProfessionalDashboard
          dashboard={profile.dashboard}
          onPress={() => router.push("/professional-dashboard")}
        />
        <ProfileActions />
        <ProfileContentTabs active={activeTab} onChange={setActiveTab} />
        <PostsGrid posts={posts} />
      </ScrollView>
    </SafeAreaView>
  );
}
