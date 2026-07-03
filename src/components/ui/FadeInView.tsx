import { type ReactNode, useEffect, useRef } from "react";
import { Animated, type ViewStyle } from "react-native";

interface FadeInViewProps {
  children: ReactNode;
  /** Fade duration in ms. */
  duration?: number;
  style?: ViewStyle;
}

/** Fades its children in (opacity 0 → 1) once, on mount. */
export function FadeInView({ children, duration = 300, style }: FadeInViewProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration, useNativeDriver: true }).start();
  }, [opacity, duration]);

  return <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>;
}
