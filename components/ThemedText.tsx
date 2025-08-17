import { Text, type TextProps, StyleSheet } from 'react-native';

import Device from '@/functions/Device';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'header' | 'default' | 'link';
};

export default function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const fontSize = Device.windowIsWide() ? 22 : 18;

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
    },
    link: {
      fontFamily: 'Monomakh',
      fontSize: fontSize,
      lineHeight: 24,
    },
    default: {
      fontFamily: 'Vollkorn',
      fontSize: fontSize,
      lineHeight: 26,
    },
  });

  return (
    <Text
      style={[
        { color: useThemeColor({}, 'text') },
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'header' ? styles.header : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'default' ? styles.default : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
