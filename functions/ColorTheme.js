import Colors from "@/constants/Colors";
import { Appearance } from "react-native";

export class ColorTheme {
  static getThemeColor(
    props,
    colorName
    //   props: { light?: string; dark?: string },
    //   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
  ) {
    const theme = Appearance.getColorScheme() ?? "dark";
    const propsColor = props[theme];

    if (propsColor) {
      return propsColor;
    } else {
      return Colors[theme][colorName];
    }
  }

  static getColor(
    colorName
    // colorName: keyof typeof Colors.light & keyof typeof Colors.dark
  ) {
    const theme = Appearance.getColorScheme() ?? "dark";

    return Colors[theme][colorName];
  }

  static getIconColor(enabled) {
    return enabled ? this.getColor("link") : this.getColor("grey");
  }
}
