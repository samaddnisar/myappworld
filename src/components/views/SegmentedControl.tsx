import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const OPTIONS = ["All", "Followers", "Non-followers"] as const;

/** Pills to filter the breakdown (visual only — mock data). */
export function SegmentedControl() {
  const [active, setActive] = useState<(typeof OPTIONS)[number]>("All");

  return (
    <View className="flex-row px-4" style={{ gap: 10 }}>
      {OPTIONS.map((opt) => {
        const isActive = opt === active;
        return (
          <Pressable
            key={opt}
            onPress={() => setActive(opt)}
            className={`rounded-full px-4 py-3.5 active:opacity-70 ${
              isActive
                ? "bg-surface border border-surface"
                : "border border-border"
            }`}
          >
            <Text className={`text-[14px] text-ink`}>{opt}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
