import { Pressable, Text, View } from "react-native";

interface FilterPillsProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  /** Extra classes for the row container. */
  className?: string;
}

/**
 * Reusable rounded filter pills (active = filled surface + border, inactive =
 * border only). Controlled — the caller owns the selected value.
 */
export function FilterPills<T extends string>({
  options,
  active,
  onChange,
  className = "",
}: FilterPillsProps<T>) {
  return (
    <View className={`flex-row ${className}`} style={{ gap: 10 }}>
      {options.map((option) => {
        const isActive = option === active;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            className={`rounded-full px-4 py-2.5 active:opacity-70 ${
              isActive ? "bg-surface border border-surface" : "border border-border"
            }`}
          >
            <Text className="text-[12px] text-ink">{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
