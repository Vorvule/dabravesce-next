import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RoundButton({ name, onPress, enabled }) {
  const color = enabled ? "teal" : "grey";

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={24} color={color} style={{}} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    margin: 14,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});
