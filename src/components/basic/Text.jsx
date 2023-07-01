import { Text as BaseText, StyleSheet, useColorScheme } from "react-native";

import { DeviceData } from "../../service/DeviceData";
import { Colors } from "../../constants/Colors";

export default function Text({ children, styling }) {
  const styles = StyleSheet.create({
    textStyle: {
      lineHeight: 24,
      paddingVertical: 6,
      fontSize: DeviceData.fontSize(16),
      color: useColorScheme() == "light" ? Colors.darkColor : Colors.lightColor,
    },
  });

  return <BaseText style={[styles.textStyle, styling]}>{children}</BaseText>;
}
