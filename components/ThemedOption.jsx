import { Pressable } from "react-native";

import { ThemedText } from "./ThemedText";

import { styles } from "../constants/styles";

export default function ThemedOption({ children, colorStyle, onPress }) {
  const pressableStyle = styles.border;
  const style = [styles.padded, colorStyle];

  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      <ThemedText type="default" style={style}>
        {children}
      </ThemedText>
    </Pressable>
  );
}
