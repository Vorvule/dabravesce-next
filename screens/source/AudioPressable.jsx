import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AudioPressable({ name, onPress, enabled }) {
  const color = enabled ? "teal" : "grey";

  return (
    <Pressable style={styles.audioPressable} onPress={onPress}>
      <FontAwesome name={name} size={15} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  audioPressable: {
    margin: 16,
    padding: 12,
    paddingLeft: 14,
    height: 41,
    width: 41,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "teal",
  },
});
