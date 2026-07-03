import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  type DimensionValue,
  Easing,
  type LayoutChangeEvent,
  StyleSheet,
  type ViewStyle,
} from "react-native";

import { colors } from "@/constants/colors";
import { SKELETON } from "@/constants/config";

interface SkeletonProps {
  width?: DimensionValue;
  height?: number;
  /** Border radius in px. */
  radius?: number;
  style?: ViewStyle;
  opacity?: number;
}

/**
 * A single placeholder block with a left → right shimmer wave.
 * Sweep speed is controlled centrally by `SKELETON.shimmerMs`.
 */
export function Skeleton({
  width = "100%",
  height = 16,
  radius = 8,
  style,
  opacity,
}: SkeletonProps) {
  const [boxWidth, setBoxWidth] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (boxWidth === 0) return;
    progress.setValue(0);
    const animation = Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: SKELETON.shimmerMs,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [boxWidth, progress]);

  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-boxWidth, boxWidth],
  });

  const onLayout = (e: LayoutChangeEvent) =>
    setBoxWidth(e.nativeEvent.layout.width);

  return (
    <Animated.View
      onLayout={onLayout}
      style={[
        {
          width,
          height,
          borderRadius: radius,
          backgroundColor: colors.skeleton,
          overflow: "hidden",
          opacity,
        },
        style,
      ]}
    >
      {boxWidth > 0 && (
        <Animated.View
          style={[StyleSheet.absoluteFill, { transform: [{ translateX }] }]}
        >
          <LinearGradient
            colors={[
              colors.skeleton,
              colors.skeletonHighlight,
              colors.skeleton,
            ]}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      )}
    </Animated.View>
  );
}
