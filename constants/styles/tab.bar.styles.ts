import {
  type Animated,
  Platform,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import Device from '@/functions/Device';

export const tabBarItemStyle = {
  borderLeftWidth: 0,
  borderRightColor: 'grey',
  borderRightWidth: 2,
  borderTopColor: 'grey',
  borderTopWidth: 2,
  borderTopRightRadius: 10,
};

export const tabBarLabelStyle = {
  fontFamily: 'Monomakh',
  fontSize: Device.platformIsWeb() ? 24 : 14,
};

export const tabBarIconStyle = {
  marginTop: -4,
  marginBottom: -4,
};

export const tabBarStyle: Animated.WithAnimatedValue<StyleProp<ViewStyle>> =
  Platform.select({
    ios: {
      position: 'absolute',
    },
    default: {},
  });
