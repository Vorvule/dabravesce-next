import { Linking, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Block from "../components/Block";

import { styles } from "../../constants/styles";
import { DeviceSpecific } from "../../library/DeviceSpecific";
import { ColorTheme } from "../../library/ColorTheme";

export function IconLink({ iconUrl, iconName, children }) {
  const fontSize = DeviceSpecific.fontSize(24, 22)

  return (
    <TouchableOpacity onPress={() => Linking.openURL(iconUrl)}>
      <View style={styles.linkView}>
        <AntDesign
          name={iconName}
          size={fontSize}
          style={styles.linkIcon}
          color={ColorTheme.iconColor()}
        />
        <Block styler={styles.highlight}>{children}</Block>
      </View>
    </TouchableOpacity>
  );
}
