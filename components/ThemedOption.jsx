import { Pressable } from "react-native";

import { ThemedText } from "./ThemedText";

import { Styles } from "../constants/Styles";

export default function ThemedOption({ children, colorStyle, onPress }) {
  const pressableStyle = Styles.border;
  const style = [Styles.padded, colorStyle];

  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      <ThemedText type="default" style={style}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
