import { Appearance, Dimensions, Platform } from "react-native";

export default class Device {
  static platformIsWeb(): boolean {
    return Platform.OS === "web";
  }

  static getAppKind(): string {
    return this.platformIsWeb() ? "сайта" : "дачынення";
  }

  static wideScreen(): boolean {
    return Dimensions.get("screen").width > 799;
  }

  static themeIsDark(): boolean {
    return Appearance.getColorScheme() == "dark";
  }
}
