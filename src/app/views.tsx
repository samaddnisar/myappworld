import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AudienceSection } from "@/components/views/AudienceSection";
import { BreakdownLegend } from "@/components/views/BreakdownLegend";
import { ContentTypeSection } from "@/components/views/ContentTypeSection";
import { ContentTypeSkeleton } from "@/components/views/ContentTypeSkeleton";
import { DateRangeBar } from "@/components/views/DateRangeBar";
import { MetricStatRow } from "@/components/views/MetricStatRow";
import { ProfileActivitySection } from "@/components/views/ProfileActivitySection";
import { TopContentSection } from "@/components/views/TopContentSection";
import { ViewsDonut } from "@/components/views/ViewsDonut";
import { ViewsHeader } from "@/components/views/ViewsHeader";
import { VIEWS_REVEAL } from "@/constants/config";
import { useAppData } from "@/store/appData";

/** Thin full-width divider within a cluster of stats. */
function HairLine() {
  return <View className="h-px bg-border/70" />;
}

/** Thick light band separating major sections. */
function SectionBand() {
  return <View className="h-2 bg-surface" />;
}

/**
 * Screen 3 — Views (opened from Professional dashboard → Insights → Views).
 *
 * Reveals in stages (see VIEWS_REVEAL.stepMs):
 *   stage 0 → header + donut only
 *   stage 1 → + everything, with "By content type" as a faint skeleton
 *   stage 2 → "By content type" renders for real (fully loaded)
 */
export default function ViewsScreen() {
  const { data } = useAppData();
  const viewsData = data.views;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), VIEWS_REVEAL.stepMs);
    const t2 = setTimeout(() => setStage(2), VIEWS_REVEAL.stepMs * 2);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-bg">
      {/* Sticky header + date range */}
      <ViewsHeader title={viewsData.title} />
      <DateRangeBar dateLabel={viewsData.dateLabel} dateRange={viewsData.dateRange} />

      {stage === 0 ? (
        // Stage 0: just the donut, centered in the available space.
        <View className="flex-1 items-center justify-center pb-24">
          <ViewsDonut total={viewsData.total} segments={viewsData.breakdown} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Donut + breakdown */}
          <View className="pt-8 pb-2">
            <ViewsDonut total={viewsData.total} segments={viewsData.breakdown} />
          </View>
          <BreakdownLegend segments={viewsData.breakdown} />

          <View className="my-2">
            <HairLine />
          </View>
          <MetricStatRow
            label="Accounts reached"
            value={viewsData.accountsReached.value}
            delta={viewsData.accountsReached.delta}
          />
          <View className="mt-1">
            <HairLine />
          </View>

          {/* By content type — skeleton until the final stage */}
          {stage >= 2 ? (
            <ContentTypeSection contentTypes={viewsData.contentTypes} />
          ) : (
            <ContentTypeSkeleton />
          )}

          <View className="mt-10 mb-4">
            <HairLine />
          </View>
          <TopContentSection items={viewsData.topContent} />

          <View className="my-6">
            <SectionBand />
          </View>
          <AudienceSection cards={viewsData.audience} />

          <View className="mt-4">
            <SectionBand />
          </View>
          <ProfileActivitySection data={viewsData.profileActivity} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
