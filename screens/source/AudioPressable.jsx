import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AudioPressable({ name, onPress, enabled }) {
  const color = enabled ? "teal" : "grey";

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={24} color={color} style={{}}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: 48,
    margin: 12,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "teal",
    alignItems: 'center',
    justifyContent: "center"
  },
});
