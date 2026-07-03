import { Text, View } from 'react-native';

interface ProfileBioProps {
  category: string;
  bio: string[];
}

/** Professional category (grey) followed by the multi-line bio. */
export function ProfileBio({ category, bio }: ProfileBioProps) {
  return (
    <View className="px-4 pt-3">
      <Text className="text-[13px] text-muted">{category}</Text>
      {bio.map((line, index) => (
        <Text key={index} className="text-[14px] leading-[20px] text-ink-soft">
          {line}
        </Text>
      ))}
    </View>
  );
}
