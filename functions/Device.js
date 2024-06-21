import { Dimensions, Platform } from "react-native";

export default class Device {
  static platformIsWeb() {
    return Platform.OS === "web";
  }

  static getAppKind() {
    return this.platformIsWeb() ? "сайта" : "дачынення";
  }

  static wideScreen() {
    return Dimensions.get("screen").width > 799;
  }
}
