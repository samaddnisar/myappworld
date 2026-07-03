import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AudienceSection } from "@/components/reel-insights/AudienceSection";
import { EngagementBar } from "@/components/reel-insights/EngagementBar";
import { EngagementSection } from "@/components/reel-insights/EngagementSection";
import {
  InsightsTabs,
  type InsightsTab,
} from "@/components/reel-insights/InsightsTabs";
import { ReelInsightsHeader } from "@/components/reel-insights/ReelInsightsHeader";
import { SummarySection } from "@/components/reel-insights/SummarySection";
import { ViewsOverTimeSection } from "@/components/reel-insights/ViewsOverTimeSection";
import { WhatImpactsSection } from "@/components/reel-insights/WhatImpactsSection";
import { colors } from "@/constants/colors";
import { REEL_INSIGHTS } from "@/constants/config";
import { useAppData } from "@/store/appData";

/**
 * Screen 5 — Reel insights. Opened from the reel's "View insights".
 * Phases: 0 spinner → 1 skeleton → 2 content (cards + graph fade in).
 */
export default function ReelInsightsScreen() {
  const { data } = useAppData();
  const reel = data.reel;
  const [phase, setPhase] = useState(0);
  const [tab, setTab] = useState<InsightsTab>("Overview");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), REEL_INSIGHTS.spinnerMs);
    const t2 = setTimeout(
      () => setPhase(2),
      REEL_INSIGHTS.spinnerMs + REEL_INSIGHTS.skeletonMs,
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const loading = phase < 2;

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      <ReelInsightsHeader />

      {phase === 0 ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="large" color={colors.mutedLight} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <EngagementBar reel={reel} />
          <InsightsTabs active={tab} onChange={setTab} />

          {tab === "Overview" ? (
            <View>
              <SummarySection insights={reel.insights} loading={loading} />
              <ViewsOverTimeSection
                insights={reel.insights}
                loading={loading}
              />
              <WhatImpactsSection insights={reel.insights} loading={loading} />
            </View>
          ) : tab === "Engagement" ? (
            <EngagementSection insights={reel.insights} />
          ) : (
            <AudienceSection insights={reel.insights} />
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
