import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

interface ProfileTopBarProps {
  handle: string;
}

/** Top navigation bar of the profile screen: add / handle+dropdown / threads + menu. */
export function ProfileTopBar({ handle }: ProfileTopBarProps) {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      {/* Left: create */}
      <Pressable hitSlop={8} className="active:opacity-60">
        <Icon name="add" size={24} tintColor={colors.ink} />
      </Pressable>

      {/* Center: handle + dropdown + unread dot */}
      <Pressable
        hitSlop={8}
        className="absolute flex-row items-center -translate-x-1/2 left-1/2 active:opacity-60"
      >
        <Text
          numberOfLines={1}
          style={{ maxWidth: 180 }}
          className="mr-2 text-xl font-semibold text-ink"
        >
          {handle}
        </Text>
        <Icon name="chevronDown" size={12} tintColor={colors.ink} />
        <View className="ml-1.5 h-2 w-2 rounded-full bg-accent" />
      </Pressable>

      {/* Right: threads + menu */}
      <View className="flex-row items-center">
        <Pressable hitSlop={8} className="mr-8 active:opacity-60">
          <Icon name="threads" size={26} tintColor={colors.ink} />
        </Pressable>
        {/* Hamburger opens the in-app data editor. */}
        <Pressable
          hitSlop={8}
          onPress={() => router.push("/editor")}
          className="active:opacity-60"
        >
          <Icon name="menu" size={24} tintColor={colors.ink} />
        </Pressable>
      </View>
    </View>
  );
}
