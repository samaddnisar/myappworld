import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '@/components/ui/Icon';
import { colors } from '@/constants/colors';
import type { IconName } from '@/lib/icons';

interface PlaceholderScreenProps {
  title: string;
  iconName?: IconName;
}

/** Simple centered placeholder for tabs/screens not yet implemented. */
export function PlaceholderScreen({ title, iconName }: PlaceholderScreenProps) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-bg">
      {iconName ? <Icon name={iconName} size={40} tintColor={colors.muted} /> : null}
      <Text className="mt-3 text-base text-muted">{title}</Text>
    </SafeAreaView>
  );
}
