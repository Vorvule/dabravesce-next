import { Dimensions, Platform, useWindowDimensions } from "react-native";

export class DeviceData {
  static isWeb() {
    return Platform.OS === "web";
  }

  static deviceIsMobile() {
    const { width, height } = useWindowDimensions();

    return width < 374 || height < 374;
  }

  static fontSize(mobileFontSize) {
    return this.deviceIsMobile() ? mobileFontSize : mobileFontSize + 2;
  }

  static logoStyle() {
    const { width } = useWindowDimensions();
    const screenPadding = 14 * 2;
    const logoWidth = Math.min(width, 600) - screenPadding;

    return { width: logoWidth, height: logoWidth / 4, alignSelf: "center" };
  }

  static getWidth() {
    // const screenHeight = Dimensions.get("screen").height; // web mobile
    return Dimensions.get("window").width;
  }

  // static windowHeight() {
  //   // const screenHeight = Dimensions.get("screen").height; // web mobile
  //   return Dimensions.get("window").height;
  // }
}
