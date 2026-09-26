import { StyleSheet, Text, useWindowDimensions, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/use.theme.color';
import { WIDTH_LIMIT } from '@/constants/breakpoints';

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'subtitle' | 'header' | 'item' | 'link' | 'default' | 'today';
};

type TextType = NonNullable<ThemedTextProps['type']>;

const ACCENTS: Record<TextType, 'text' | 'link' | 'primary'> = {
  title: 'primary',
  subtitle: 'link',
  header: 'text',
  item: 'text',
  link: 'link',
  default: 'text',
  today: 'primary',
};

const createStyles = (fontSize: number) =>
  StyleSheet.create({
    title: { fontFamily: 'Monomakh', textAlign: 'center', fontSize: fontSize + 20 },
    subtitle: { fontFamily: 'Monomakh', textAlign: 'center', fontSize: fontSize + 14 },
    header: { fontFamily: 'Monomakh', fontSize: fontSize + 6, paddingVertical: 4 },
    link: { fontFamily: 'Monomakh', fontSize: fontSize + 3, lineHeight: 24 },
    item: { fontFamily: 'Monomakh', fontSize: fontSize + 3, lineHeight: 24 },
    default: { fontFamily: 'Vollkorn', fontSize, lineHeight: 26 },
    today: { fontFamily: 'Vollkorn', fontSize, lineHeight: 26 },
  });

const narrowStyles = createStyles(18);
const wideStyles = createStyles(22);

export default function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const { width } = useWindowDimensions();
  const color = useThemeColor({}, ACCENTS[type]);
  const styles = width > WIDTH_LIMIT.MIDDLE_COLUMN ? wideStyles : narrowStyles;

  return <Text style={[styles[type], { color }, style]} {...rest} />;
}
