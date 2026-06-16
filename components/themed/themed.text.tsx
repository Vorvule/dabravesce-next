import { StyleSheet, Text, useWindowDimensions, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/use.theme.color';
import { WIDTH_LIMIT } from '../../constants/breakpoints';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'header' | 'item' | 'link' | 'default' | 'today';
};

export default function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const { width } = useWindowDimensions();
  const fontSize = width > WIDTH_LIMIT.MIDDLE_COLUMN ? 22 : 18;
  const color = useThemeColor({}, 'text');

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 20,
      color: useThemeColor({}, 'primary'),
    },
    subtitle: {
      fontFamily: 'Monomakh',
      textAlign: 'center',
      fontSize: fontSize + 14,
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
    today: {
      fontFamily: 'Vollkorn',
      fontSize: fontSize,
      lineHeight: 26,
      color: useThemeColor({}, 'primary'),
    },
  });

  return <Text style={[styles[type], style]} {...rest} />;
}
