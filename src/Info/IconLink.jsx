import { Linking, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Text from "../components/basic/Text";

import { styles } from "../constants/styles";
import { DeviceData } from "../service/DeviceData";
import { ColorTheme } from "../service/ColorTheme";

export function IconLink({ iconUrl, iconName, children }) {
  const fontSize = DeviceData.fontSize(26);

  return (
    <Pressable onPress={() => Linking.openURL(iconUrl)}>
      <View style={styles.linkView}>
        <AntDesign
          name={iconName}
          size={fontSize}
          style={styles.linkIcon}
          color={ColorTheme.iconColor()}
        />
        <Text styling={styles.highlight}>{children}</Text>
      </View>
    </Pressable>
  );
}
