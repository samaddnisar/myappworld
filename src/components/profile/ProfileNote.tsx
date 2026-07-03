import { Text, View } from "react-native";

interface ProfileNoteProps {
  text: string;
}

/** Story "note" bubble that floats above the avatar. */
export function ProfileNote({ text }: ProfileNoteProps) {
  return (
    <View className="items-center">
      <View
        className="max-w-[85px] rounded-2xl bg-bg px-3 py-2"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2,
        }}
      >
        <Text className="text-xs leading-4 text-center text-muted">{text}</Text>
      </View>
      {/* tail */}
      <View className="-mt-0.5 h-2.5 w-2.5 rounded-full bg-surface" />
    </View>
  );
}
