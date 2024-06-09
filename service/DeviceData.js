import { Platform, useWindowDimensions } from "react-native";

export class DeviceData {
  static isWeb() {
    return Platform.OS === "web";
  }

  static getAppKind() {
    return this.isWeb() ? "сайта" : "дачынення";
  }

  static deviceIsMobile() {
    const { width, height } = useWindowDimensions();

    return width < 374 || height < 374;
  }

  static fontSize(mobileFontSize) {
    return this.deviceIsMobile() ? mobileFontSize : mobileFontSize + 2;
  }
}
