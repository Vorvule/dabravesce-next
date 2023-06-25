import { TouchableOpacity, View } from "react-native";

import Text from "./Text";
import { styles } from "../../../constants/styles";

export default function MenuItem({ children, styling, onPress }) {
  return (
    <View style={styles.menuItemBorder}>
      <TouchableOpacity onPress={onPress}>
        <Text styling={[styles.menuItemText, styling]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
