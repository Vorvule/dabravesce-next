import { Appearance } from 'react-native';

import Colors from '@/constants/Colors';

export class ColorTheme {
  static getColor(
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  ) {
    const schemeName = Appearance.getColorScheme() ?? 'dark';

    return Colors[schemeName][colorName];
  }

  static getIconColor(enabled: boolean) {
    const colorName = enabled ? 'link' : 'grey';

    return this.getColor(colorName);
  }
}
