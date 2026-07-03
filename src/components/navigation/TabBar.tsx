import { Image } from "expo-image";
import type { Href } from "expo-router";
import { forwardRef } from "react";
import {
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import { AVATAR } from "@/constants/layout";
import { profile } from "@/data/profile";
import type { IconName } from "@/lib/icons";

export interface TabItem {
  /** Must match the route file name inside the (tabs) group. */
  name: string;
  href: Href;
  icon?: IconName;
  avatar?: string;
  badge?: number;
}

/**
 * Bottom navigation items, in display order (left → right).
 *
 * NOTE: the Profile screen is currently the index route ("/"), so it appears
 * last here with `name: 'index'`. The Home tab points at the `/home` placeholder
 * for now.
 */
export const TAB_ITEMS: TabItem[] = [
  { name: "home", href: "/home", icon: "navHome" },
  { name: "reels", href: "/reels", icon: "navReels" },
  {
    name: "activity",
    href: "/activity",
    icon: "navActivity",
    badge: profile.unreadActivity,
  },
  { name: "search", href: "/search", icon: "navSearch" },
  { name: "index", href: "/", avatar: profile.avatar },
];

/** Container style for the <TabList> bar. */
export function tabBarStyle(insetBottom: number): ViewStyle {
  return {
    flexDirection: "row",
    backgroundColor: colors.bg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    paddingTop: 8,
    paddingBottom: Math.max(insetBottom, 8),
  };
}

type TabBarButtonProps = PressableProps & {
  /** Injected by <TabTrigger asChild>. */
  isFocused?: boolean;
  icon?: IconName;
  avatarUri?: string;
  badgeCount?: number;
};

/** A single bottom-nav button. Renders an icon, or the user's avatar (profile tab). */
export const TabBarButton = forwardRef<View, TabBarButtonProps>(
  function TabBarButton(
    { isFocused, icon: iconName, avatarUri, badgeCount, style, ...pressable },
    ref,
  ) {
    return (
      <Pressable
        ref={ref}
        {...pressable}
        // Inline flex:1 (not a className) so it survives the <TabTrigger asChild>
        // Slot on native — otherwise the items bunch to the edges of the bar.
        // style={[{ flex: 1, justifyContent: "center" }, style as ViewStyle]}
        className="items-center self-center justify-center py-2 mx-8 place-self-center active:opacity-60"
      >
        <View>
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              style={{
                width: AVATAR.tab,
                height: AVATAR.tab,
                borderRadius: AVATAR.tab / 2,
                borderWidth: isFocused ? 1.5 : 0,
                borderColor: colors.ink,
              }}
              contentFit="cover"
            />
          ) : iconName ? (
            <Icon name={iconName} size={26} tintColor={colors.ink} />
          ) : null}

          {/* Unread badge (e.g. activity tab) */}
          {badgeCount ? (
            <View
              className="absolute -bottom-[2px] items-center justify-center px-1 border-2 rounded-full border-bg -right-2 bg-accent"
              style={{ minWidth: 20, height: 20 }}
            >
              <Text className="font-bold text-white text-2xs">
                {badgeCount}
              </Text>
            </View>
          ) : null}

          {/* Small unread dot on the profile avatar */}
          {avatarUri ? (
            <View className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
          ) : null}
        </View>
      </Pressable>
    );
  },
);
