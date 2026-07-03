import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { InsightsSection } from "@/components/dashboard/InsightsSection";
import { ToolsSection } from "@/components/dashboard/ToolsSection";
import { SKELETON } from "@/constants/config";
import { useAppData } from "@/store/appData";

/** Screen 2 — Professional dashboard (pushed from the profile dashboard card). */
export default function ProfessionalDashboardScreen() {
  const { data } = useAppData();
  const dashboard = data.dashboard;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), SKELETON.visibleMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <DashboardHeader title={dashboard.title} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 32 }}
          >
            <InsightsSection
              dateRange={dashboard.dateRange}
              insights={dashboard.insights}
            />
            <View className="h-px mt-4 mb-2 bg-[#F8F8F8]" />
            <ToolsSection tools={dashboard.tools} />
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
