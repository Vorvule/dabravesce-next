import { Dimensions, Platform, useWindowDimensions } from "react-native";

export class DeviceData {
  static isWeb() {
    return Platform.OS === "web";
  }

  static getAppKind() {
    return this.isWeb() ? "сайта" : "дачынення";
  }

  static wideScreen() {
    return Dimensions.get("screen").width > 799;
  }
}
