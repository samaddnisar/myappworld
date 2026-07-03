import { ScrollView, Text, useWindowDimensions, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { colors } from "@/constants/colors";
import type { AudienceCard } from "@/data/views";

function AudienceCardView({
  card,
  width,
}: {
  card: AudienceCard;
  width: number;
}) {
  return (
    <View style={{ width }} className="p-5 border rounded-[4px]  border-border">
      <Text className="text-[19px] font-semibold text-ink mb-5">
        {card.title}
      </Text>
      <View
        style={{ gap: 12 }}
        className={`${card.title == "Gender" ? "mt-[80px]" : ""}`}
      >
        {card.items.map((item) => (
          <View key={item.label}>
            <Text className="text-[15px] text-ink mb-1">{item.label}</Text>
            <View className="flex-row items-center">
              <View className="flex-1">
                <ProgressBar
                  percent={item.percent}
                  color={item.color ?? colors.chartMagenta}
                  height={card.barHeight ?? 9}
                  radius={card.barRadius ?? 100}
                  trackRadius={3}
                />
              </View>
              <Text className="ml-3 w-[64px] text-right text-[15px] font-semibold text-ink">
                {item.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

/** "Audience" — heading + a horizontal carousel of breakdown cards. */
export function AudienceSection({ cards }: { cards: AudienceCard[] }) {
  const { width } = useWindowDimensions();
  const cardWidth = width - 64; // leaves a peek of the next card

  return (
    <View className="pt-3">
      <View className="flex-row items-center px-4 pb-10">
        <Text className="text-[20px] text-ink">Audience</Text>
        <View className="ml-1.5">
          <Icon name="info" size={21} />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
      >
        {cards.map((card) => (
          <AudienceCardView key={card.id} card={card} width={cardWidth} />
        ))}
      </ScrollView>
    </View>
  );
}
