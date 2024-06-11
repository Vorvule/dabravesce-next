import { Pressable } from "react-native";

import { ThemedText } from "./ThemedText";

import { Styles } from "../constants/Styles";

export default function ThemedOption({ children, colorStyle, onPress }) {
  return (
    <Pressable onPress={onPress} style={Styles.border}>
      <ThemedText type="default" style={[Styles.padded, colorStyle]}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
