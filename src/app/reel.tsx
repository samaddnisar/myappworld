import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "@/components/ui/Icon";
import { colors } from "@/constants/colors";
import { getBundledReel } from "@/lib/reelVideo";
import { useAppData } from "@/store/appData";

/** Screen 4 — a tapped reel (video) with its overlays and actions. */
export default function ReelScreen() {
  const router = useRouter();
  const { data } = useAppData();
  const reel = data.reel;

  const [muted, setMuted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Prefer the bundled assets/videos/reel.mp4 (instant, offline); fall back to
  // the remote URL in the reel data when it's not present.
  const videoSource = getBundledReel() ?? reel.video;
  const player = useVideoPlayer(videoSource, (p) => {
    p.loop = true;
    p.muted = false;
    p.play();
  });

  useEffect(() => {
    player.muted = muted;
  }, [muted, player]);

  // Reveal the video once its first frame is ready; show the thumbnail until then.
  useEffect(() => {
    if (player.status === "readyToPlay") setVideoReady(true);
    const sub = player.addListener("statusChange", ({ status }) => {
      if (status === "readyToPlay") setVideoReady(true);
    });
    return () => sub.remove();
  }, [player]);

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-bg">
      {/* Header */}
      <View className="flex-row items-center px-3 py-3">
        <Pressable
          hitSlop={8}
          onPress={() => router.back()}
          className="p-1 active:opacity-60"
        >
          <Icon name="back" size={24} tintColor={colors.ink} />
        </Pressable>
        <Text className="ml-5 font-medium text-[22px]  text-ink">Posts</Text>
      </View>

      {/* Video + overlays */}
      <View className="flex-1 bg-black">
        <VideoView
          player={player}
          style={{ flex: 1 }}
          contentFit="cover"
          nativeControls={false}
        />

        {/* Thumbnail shown until the video's first frame is ready (avoids a black flash) */}
        {!videoReady && (
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            <Image
              source={{ uri: reel.thumbnail }}
              style={StyleSheet.absoluteFill}
              contentFit="cover"
            />
          </View>
        )}

        {/* Top-left: avatar / handle / audio */}
        <View className="absolute flex flex-row items-center gap-3 left-3 top-3">
          <Image
            source={{ uri: reel.avatar }}
            style={{ width: 32, height: 32, borderRadius: 15 }}
            contentFit="cover"
          />
          <View className="flex-col items-start">
            <Text className="text-[16px] font-semibold text-white">
              {reel.handle}
            </Text>
            <View className="flex-row items-center mt-1.5">
              <Icon name="music" size={12} tintColor={colors.white} />
              <Text className="ml-[5px] text-[13px] text-white">
                {reel.handle} · {reel.audioLabel}
              </Text>
            </View>
          </View>
        </View>

        {/* Top-right: more */}
        <Pressable
          hitSlop={8}
          className="absolute p-1 right-3 top-6 active:opacity-60"
        >
          <Icon name="more" size={16} tintColor={colors.white} />
        </Pressable>

        {/* Bottom-right: mute/unmute */}
        <Pressable
          hitSlop={8}
          onPress={() => setMuted((m) => !m)}
          className="absolute items-center justify-center rounded-full bottom-4 right-3 h-7 w-7 bg-black/50 active:opacity-70"
        >
          <Icon name="mute" size={13} tintColor={colors.white} />
        </Pressable>
      </View>

      {/* Bottom bar: view count + insights + boost */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <Pressable
          onPress={() => router.push("/reel-insights")}
          className="flex-row items-center active:opacity-60"
        >
          <Icon name="play" size={13} tintColor={colors.link} />
          <Text className="ml-1.5 font-medium text-[15px] text-link">
            {reel.viewCount} ·{" "}
          </Text>
          <Text className="text-[15px] font-semibold text-link">
            View insights
          </Text>
        </Pressable>

        <Pressable className="rounded-lg bg-link px-5 py-2.5 active:opacity-80">
          <Text className="text-[15px] font-semibold text-white">
            Boost post
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
