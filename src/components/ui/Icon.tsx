import { Image, View } from "react-native";

import { getIconSource, type IconName } from "@/lib/icons";

interface IconProps {
  name: IconName;
  /** Rendered width & height in px. */
  size?: number;
  /** Tint applied to a monochrome PNG. Omit to show the PNG's own colors. */
  tintColor?: string;
}

/** Renders a PNG icon from `assets/icons/` (see `src/lib/icons.ts`). */
export function Icon({ name, size = 24, tintColor }: IconProps) {
  const source = getIconSource(name);

  // PNG not added yet — keep layout stable with a transparent spacer.
  if (source == null) {
    return <View style={{ width: size, height: size }} />;
  }

  return (
    <Image
      source={source}
      style={{ width: size, height: size, tintColor }}
      resizeMode="contain"
    />
  );
}
