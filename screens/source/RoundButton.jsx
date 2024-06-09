import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function RoundButton({ name, onPress, enabled }) {
  const tint = useThemeColor({}, "text");
  const color = enabled ? tint : "#888888";

  const styles = {
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
  };

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={24} color={color} style={{}} />
    </Pressable>
  );
}
