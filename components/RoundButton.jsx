import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useThemeColor from "@/hooks/useThemeColor";

export default function RoundButton({ name, onPress, enabled }) {
  const link = useThemeColor({}, "link");
  const grey = useThemeColor({}, "grey");
  const color = enabled ? link : grey;

  const styles = StyleSheet.create({
    button: {
      height: 50,
      width: 50,
      margin: 14,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: color,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={24} color={color} style={{}} />
    </Pressable>
  );
}
