import { Platform, useWindowDimensions } from "react-native";

export class DeviceData {
  static isWeb() {
    return Platform.OS === "web";
  }

  static getAppKind() {
    return this.isWeb() ? "сайта" : "дачынення";
  }
}
