import * as React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "../constants/styles";

export default function AudioPressable({ name, onPress, enabled }) {
  const color = enabled ? "teal" : "gray";

  return (
    <Pressable style={styles.audioPressable} onPress={onPress}>
      <FontAwesome name={name} size={15} color={color} />
    </Pressable>
  );
}
