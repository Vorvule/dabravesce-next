import { Platform, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: Record<string, any>) {
  return (
    <Pressable
      {...props}
      onPressIn={(ev) => {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
