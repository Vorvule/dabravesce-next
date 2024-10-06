import { Pressable } from "react-native";

import ThemedText from "./ThemedText";

import Styles from "../constants/Styles";

export default function ThemedOption({ children, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={Styles.border}>
      <ThemedText type="link" style={[Styles.padded, color]}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
