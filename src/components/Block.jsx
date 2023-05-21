import { Text, useColorScheme } from "react-native";

import { DeviceSpecific } from "../../library/DeviceSpecific";
import { styles } from "../../constants/styles";
import { Colors } from "../../constants/Colors";

export default function Block({ children, styler }) {
  const color =
    useColorScheme() == "light" ? Colors.darkColor : Colors.lightColor;
    
  const style = { color: color, fontSize: DeviceSpecific.fontSize(14, 16) };

  return <Text style={[styles.textBlock, style, styler]}>{children}</Text>;
}
