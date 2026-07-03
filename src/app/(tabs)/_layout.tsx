import { TabList, TabSlot, TabTrigger, Tabs } from "expo-router/ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  TAB_ITEMS,
  TabBarButton,
  tabBarStyle,
} from "@/components/navigation/TabBar";
import { useAppData } from "@/store/appData";

/**
 * Bottom-tab navigator using the headless `expo-router/ui` Tabs API so the tab
 * bar is fully custom. The <TabList>/<TabTrigger> tree must live directly under
 * <Tabs> — that's how the navigator discovers its screens.
 *
 * `initialRouteName: 'index'` keeps the Profile screen (screen 1) as the anchor.
 */
export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { data } = useAppData();

  return (
    <Tabs options={{ initialRouteName: "index" }} style={{ flex: 1 }}>
      {/* flex:1 bounds the screen area so each screen scrolls internally and the
          tab bar stays pinned at the bottom (instead of being pushed off-screen). */}
      <TabSlot style={{ flex: 1 }} />
      <TabList style={tabBarStyle(insets.bottom)}>
        {TAB_ITEMS.map((item) => {
          // Keep the profile avatar + activity badge in sync with the live store.
          const avatar =
            item.name === "index" ? data.profile.avatar : item.avatar;
          const badge =
            item.name === "activity" ? data.profile.unreadActivity : item.badge;
          return (
            <TabTrigger
              key={item.name}
              name={item.name}
              href={item.href}
              asChild
            >
              <TabBarButton
                icon={item.icon}
                avatarUri={avatar}
                badgeCount={badge}
              />
            </TabTrigger>
          );
        })}
      </TabList>
    </Tabs>
  );
}
