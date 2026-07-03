import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import { GRID } from "@/constants/layout";
import type { Post } from "@/types";

const textShadow = {
  textShadowColor: "rgba(0,0,0,0.45)",
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 3,
} as const;

/** A single tile in the posts grid, with reel + view-count overlays. Opens the reel on tap. */
export function PostThumbnail({ post, width }: { post: Post; width: number }) {
  const router = useRouter();

  return (
    <Pressable
      style={{ width, aspectRatio: GRID.aspectRatio }}
      onPress={() => router.push("/reel")}
    >
      {({ pressed }) => (
        <View className="w-full h-full overflow-hidden bg-surface-alt">
          <Image
            source={{ uri: post.image }}
            className="w-full h-full"
            contentFit="cover"
          />

          {post.type === "reel" && (
            <View className="absolute right-1.5 top-1.5">
              <Icon
                name={post.pinned ? "pin" : "thumbnailReels"}
                size={18}
                tintColor={colors.white}
              />
            </View>
          )}

          {post.views != null && (
            <View className="absolute bottom-1.5 left-1.5 flex-row items-center">
              <Icon name="play" size={13} tintColor={colors.white} />
              <Text className="ml-1 text-xs font-semibold text-white">
                {post.views}
              </Text>
            </View>
          )}

          {/* Tap dims the tile to ~0.5 brightness. */}
          {pressed && (
            <View
              pointerEvents="none"
              className="absolute inset-0 bg-black"
              style={{ opacity: 0.5 }}
            />
          )}
        </View>
      )}
    </Pressable>
  );
}
