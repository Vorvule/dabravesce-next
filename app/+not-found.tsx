import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function NotFoundScreen() {
  const linkTextColor = useThemeColor({}, "tint");
  const linkTextStyle = { color: linkTextColor, fontFamily: "SofiaSemiBold" };

  return (
      <ThemedView style={styles.container}>
        <ThemedText type="default">Такой старонкі не існуе ;o|</ThemedText>
        <Link href="/">
          <ThemedText type="default" style={linkTextStyle}>На першую старонку!</ThemedText>
        </Link>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
