import { Image } from "expo-image";
import { Pressable, ScrollView, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { TopContentItem } from "@/data/views";

function TopContentCard({ item }: { item: TopContentItem }) {
  return (
    <View style={{ width: 110 }}>
      <View
        className="overflow-hidden rounded-[20px] bg-surface-alt"
        style={{ aspectRatio: 127 / 170 }}
      >
        <Image
          source={{ uri: item.image }}
          className="w-full h-full"
          contentFit="cover"
        />
        <View className="absolute right-2 top-2">
          <Icon name="topContentReels" size={18} tintColor={colors.white} />
        </View>
        <View className="absolute self-center px-3 py-1 bg-white rounded-full bottom-2">
          <Text className="text-[16px] font-bold text-ink">{item.views}</Text>
        </View>
      </View>
      <Text className="text-center text-[13px] text-muted mt-2">
        {item.date}
      </Text>
    </View>
  );
}

/** "By top content" — heading + "See All" + a horizontal carousel of thumbnails. */
export function TopContentSection({ items }: { items: TopContentItem[] }) {
  return (
    <View className="pt-3">
      <View className="flex-row items-center justify-between px-4 pb-10">
        <Text className="text-[20px]  text-ink">By top content</Text>
        <Pressable hitSlop={8} className="active:opacity-60">
          <Text className="text-[15px] font-semibold text-link">See All</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}
      >
        {items.map((item) => (
          <TopContentCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}
