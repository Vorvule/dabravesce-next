import { Linking, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "../components/basic/Text";

import { styles } from "../../constants/styles";
import { DeviceData } from "../../library/DeviceData";
import { ColorTheme } from "../../library/ColorTheme";

export function IconLink({ iconUrl, iconName, children }) {
  const fontSize = DeviceData.fontSize(24, 22);

  return (
    <TouchableOpacity onPress={() => Linking.openURL(iconUrl)}>
      <View style={styles.linkView}>
        <AntDesign
          name={iconName}
          size={fontSize}
          style={styles.linkIcon}
          color={ColorTheme.iconColor()}
        />
        <Text styling={styles.highlight}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
