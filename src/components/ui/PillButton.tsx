import { Pressable, Text } from "react-native";

interface PillButtonProps {
  label: string;
  onPress?: () => void;
  /** Extra classes for the container (e.g. width overrides). */
  className?: string;
}

/**
 * Light grey rounded action button used for the profile actions
 * (Edit profile / Share profile / Subscription).
 */
export function PillButton({
  label,
  onPress,
  className = "",
}: PillButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 items-center justify-center rounded-lg bg-surface-alt py-2 active:opacity-70 ${className}`}
    >
      <Text className="text-base font-medium text-ink-soft">{label}</Text>
    </Pressable>
  );
}
