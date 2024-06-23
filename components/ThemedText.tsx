import { Text, type TextProps, StyleSheet } from "react-native";

import useThemeColor from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "title" | "subtitle" | "header" | "default" | "active";
};

export default function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );

  const titleColor = useThemeColor({}, "title");
  const subtitleColor = useThemeColor({}, "subtitle");
  const headerColor = useThemeColor({}, "header");

  const styles = StyleSheet.create({
    title: {
      fontFamily: "SofiaSemiBold",
      fontSize: 24,
      color: titleColor,
      lineHeight: 36,
      textAlign: "center",
    },
    subtitle: {
      fontFamily: "SofiaSemiBold",
      fontSize: 22,
      color: subtitleColor,
    },
    header: {
      fontFamily: "SofiaSemiBold",
      fontSize: 20,
      color: headerColor,
      lineHeight: 24,
    },
    default: {
      fontFamily: "Sofia",
      fontSize: 18,
      lineHeight: 24,
    },
    active: {
      fontFamily: "Sofia",
      fontSize: 18,
      lineHeight: 24,
      color: "",
    },
  });

  return (
    <Text
      style={[
        { color: textColor },
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "header" ? styles.header : undefined,
        type === "default" ? styles.default : undefined,
        type === "active" ? styles.active : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
