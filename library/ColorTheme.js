import { useColorScheme } from "react-native";

import { Colors, Themes } from "../constants/Colors";

export class ColorTheme {
  static navigationTheme() {
    return useColorScheme() == "light" ? Themes.lightTheme : Themes.darkTheme;
  }

  static iconColor() {
    return useColorScheme() == "light" ? Colors.darkColor : Colors.lightColor;
  }

  static value() {
    return useColorScheme();
  }
}
