import { useWindowDimensions, View } from "react-native";

import { GRID } from "@/constants/layout";
import type { Post } from "@/types";

import { PostThumbnail } from "./PostThumbnail";

/**
 * 3-column posts grid. Rendered as a plain flex-wrap (not a FlatList) so it can
 * live inside the profile ScrollView without nested virtualization.
 *
 * Tile width is computed so the gap only appears *between* tiles — no padding on
 * the outer edges of the grid.
 */
export function PostsGrid({ posts }: { posts: Post[] }) {
  const { width } = useWindowDimensions();
  const tileWidth = (width - GRID.gap * (GRID.columns - 1)) / GRID.columns;

  return (
    <View className="flex-row flex-wrap" style={{ gap: GRID.gap }}>
      {posts.map((post) => (
        <PostThumbnail key={post.id} post={post} width={tileWidth} />
      ))}
    </View>
  );
}
