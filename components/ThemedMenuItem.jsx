import { Pressable } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { styles } from "../constants/styles";

export default function ThemedMenuItem({ children, styling, onPress }) {
  return (
    <ThemedView style={styles.menuItemBorder}>
      <Pressable onPress={onPress}>
        <ThemedText style={[styles.menuItemText, styling]}>
          {children}
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}
