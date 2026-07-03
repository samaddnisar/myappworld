import { View } from 'react-native';

import { PillButton } from '@/components/ui/PillButton';

/** Row of action buttons: Edit profile / Share profile / Subscription. */
export function ProfileActions() {
  return (
    <View className="mx-4 mt-3 flex-row gap-2">
      <PillButton label="Edit profile" />
      <PillButton label="Share profile" />
      <PillButton label="Subscription" />
    </View>
  );
}
