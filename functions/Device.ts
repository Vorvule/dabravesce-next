import { Appearance, Dimensions, Platform } from "react-native";

export default class Device {
  static platformIsWeb(): boolean {
    return Platform.OS === "web";
  }

  static getAppKind(): string {
    return this.platformIsWeb() ? "сайта" : "дачынення";
  }

  static windowIsWide(): boolean {
    return this.getWindowWidth() > 800;
  }

  static getWindowWidth(): number {
    return Dimensions.get("window").width;
  }

  static themeIsDark(): boolean {
    return Appearance.getColorScheme() == "dark";
  }
}
