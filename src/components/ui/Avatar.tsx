import { Image } from "expo-image";
import { View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";

interface AvatarProps {
  uri: string;
  /** Diameter of the avatar image itself, in px. */
  size: number;
  /** Show the unseen-story gradient ring around the avatar. */
  ring?: boolean;
  /** Show the "+" add-to-story badge at the bottom-right. */
  showAddBadge?: boolean;
}

const RING_WIDTH = 3;
const RING_GAP = 3;

/**
 * Circular avatar with an optional Instagram-style story gradient ring and an
 * optional "add to story" badge.
 */
export function Avatar({
  uri,
  size,
  ring = false,
  showAddBadge = false,
}: AvatarProps) {
  const outer = ring ? size + 2 * (RING_WIDTH + RING_GAP) : size;
  const badge = Math.round(size * 0.3);

  return (
    <View
      style={{ width: outer, height: outer }}
      className="items-center justify-center"
    >
      {ring ? (
        <View
          style={{
            width: outer,
            height: outer,
            borderRadius: outer / 2,
            backgroundColor: colors.storyRing,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: size + 2 * RING_GAP,
              height: size + 2 * RING_GAP,
              borderRadius: (size + 2 * RING_GAP) / 2,
              backgroundColor: colors.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri }}
              style={{ width: size, height: size, borderRadius: size / 2 }}
              contentFit="cover"
            />
          </View>
        </View>
      ) : (
        <Image
          source={{ uri }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          contentFit="cover"
        />
      )}

      {showAddBadge && (
        <View
          className="absolute items-center justify-center rounded-full border-[3px] border-white bg-black"
          style={{ width: badge, height: badge, right: 0, bottom: 0 }}
        >
          <Icon name="add" size={10} tintColor={colors.white} />
        </View>
      )}
    </View>
  );
}
