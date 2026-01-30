import { Text, type TextProps, StyleSheet } from 'react-native';

import Device from '@/functions/Device';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'header' | 'item' | 'link' | 'default';
};

export default function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const fontSize = Device.windowIsWide() ? 22 : 18;
  const color = useThemeColor({}, 'text');

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 12,
      color: useThemeColor({}, 'primary'),
    },
    subtitle: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 9,
      color: useThemeColor({}, 'link'),
    },
    header: {
      fontFamily: 'Monomakh',
      fontSize: fontSize + 6,
      paddingVertical: 4,
      color,
    },
    link: {
      fontFamily: 'Monomakh',
      fontSize: fontSize + 3,
      lineHeight: 24,
      color: useThemeColor({}, 'link'),
    },
    item: {
      fontFamily: 'Monomakh',
      fontSize: fontSize + 3,
      lineHeight: 24,
      color,
    },
    default: {
      fontFamily: 'Vollkorn',
      fontSize: fontSize,
      lineHeight: 26,
      color,
    },
  });

  return <Text style={[styles[type], style]} {...rest} />;
}
