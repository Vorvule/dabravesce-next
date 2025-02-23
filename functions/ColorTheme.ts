import Colors from '@/constants/Colors';
import { Appearance } from 'react-native';

export class ColorTheme {
  static getThemeColor(
    props: {
      light?: string | undefined;
      dark?: string | undefined;
    },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  ) {
    const theme = Appearance.getColorScheme() ?? 'dark';
    const propsColor = props[theme];

    if (propsColor) {
      return propsColor;
    } else {
      return Colors[theme][colorName];
    }
  }

  static getColor(
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  ) {
    const theme = Appearance.getColorScheme() ?? 'dark';

    return Colors[theme][colorName];
  }

  static getIconColor(enabled: boolean) {
    return enabled ? this.getColor('link') : this.getColor('grey');
  }
}
