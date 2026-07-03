import { Pressable, Text, View } from "react-native";

import type { ToolItem } from "@/types";

import { ToolRow } from "./ToolRow";

/** "Your tools" heading + "See all" link, followed by the tool rows. */
export function ToolsSection({ tools }: { tools: ToolItem[] }) {
  return (
    <View className="pt-2">
      <View className="flex-row items-center justify-between px-4 pt-2 pb-3">
        <Text className="text-[20px]  text-ink">Your tools</Text>
        <Pressable hitSlop={8} className="active:opacity-60">
          <Text className="text-[15px] font-semibold text-link">See all</Text>
        </Pressable>
      </View>
      {tools.map((item) => (
        <ToolRow key={item.id} item={item} />
      ))}
    </View>
  );
}
