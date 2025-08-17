import { Text, type TextProps, StyleSheet } from 'react-native';

import { ColorTheme } from '@/functions/ColorTheme';
import Device from '@/functions/Device';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'header' | 'default' | 'link';
};

export default function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const textColor = ColorTheme.getColor('text');
  const primary = ColorTheme.getColor('primary');
  const fontSize = Device.windowIsWide() ? 22 : 18;

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 12,
      color: primary,
    },
    subtitle: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 9,
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
        { color: textColor },
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
