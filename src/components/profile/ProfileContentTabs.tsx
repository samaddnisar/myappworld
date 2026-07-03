import { Pressable, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import type { IconName } from "@/lib/icons";

export type ContentTab = "grid" | "crown" | "reels" | "tagged";

const TABS: { key: ContentTab; icon: IconName }[] = [
  { key: "grid", icon: "tabGrid" },
  { key: "crown", icon: "tabCrown" },
  { key: "reels", icon: "tabReels" },
  { key: "tagged", icon: "tabTagged" },
];

interface ProfileContentTabsProps {
  active: ContentTab;
  onChange: (tab: ContentTab) => void;
}

/** Segmented tabs (grid / crown / reels / tagged) above the posts grid. */
export function ProfileContentTabs({
  active,
  onChange,
}: ProfileContentTabsProps) {
  return (
    <View className="flex-row mt-2 ">
      {TABS.map(({ key, icon }) => {
        const isActive = key === active;
        return (
          <Pressable
            key={key}
            onPress={() => onChange(key)}
            className="items-center flex-1 active:opacity-60"
          >
            <View
              className={`w-full items-center border-b-2 py-2.5 ${
                isActive ? "border-ink" : "border-transparent"
              }`}
            >
              <Icon
                name={icon}
                size={26}
                tintColor={isActive ? colors.ink : colors.muted}
              />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
