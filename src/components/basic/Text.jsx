import { Text as DefaultText, useColorScheme } from "react-native";

import { DeviceData } from "../../../library/DeviceData";
import { styles } from "../../../constants/styles";
import { Colors } from "../../../constants/Colors";

export default function Text({ children, styling }) {
  const color =
    useColorScheme() == "light" ? Colors.darkColor : Colors.lightColor;

  const fontStyle = { color: color, fontSize: DeviceData.fontSize(14, 16) };

  const style = [styles.basicText, fontStyle, styling];

  return <DefaultText style={style}>{children}</DefaultText>;
}
