import { Text, type TextProps, StyleSheet } from "react-native";

import { ColorTheme } from "@/functions/ColorTheme";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "title" | "subtitle" | "header" | "default" | "link";
};

export default function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const colors = { light: lightColor, dark: darkColor };

  const textColor = ColorTheme.getThemeColor(colors, "text");
  const primary = ColorTheme.getColor("primary");

  const styles = StyleSheet.create({
    title: {
      fontFamily: "SofiaSemiBold",
      fontSize: 24,
      color: primary,
      lineHeight: 36,
      textAlign: "center",
    },
    subtitle: {
      fontFamily: "SofiaSemiBold",
      fontSize: 22,
    },
    header: {
      fontFamily: "SofiaSemiBold",
      fontSize: 20,
      lineHeight: 24,
    },
    link: {
      fontFamily: "Sofia",
      fontSize: 19,
    },
    default: {
      fontFamily: "Sofia",
      fontSize: 18,
      lineHeight: 24,
    },
  });

  return (
    <Text
      style={[
        { color: textColor },
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "header" ? styles.header : undefined,
        type === "link" ? styles.link : undefined,
        type === "default" ? styles.default : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
