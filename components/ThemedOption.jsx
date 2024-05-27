import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { styles } from "../constants/styles";

export default function ThemedOption({ children, colorStyle, onPress }) {
  const pressableStyle = styles.optionBorder;
  const textStyle = [styles.optionText, colorStyle];

  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      <ThemedText style={textStyle}>{children}</ThemedText>
    </Pressable>
  );
}
