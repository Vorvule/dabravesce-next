import { Text } from "react-native";

import { DeviceSpecific } from "../../library/DeviceSpecific";
import { styles } from "../../constants/styles";

export default function Block({ children, styler }) {
  return (
    <Text style={[styles.textBlock, DeviceSpecific.sizedFont(14, 16), styler]}>
      {children}
    </Text>
  );
}
