import { View, type ViewProps } from "react-native";

import { ColorTheme } from "@/functions/ColorTheme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const colors = { light: lightColor, dark: darkColor };
  const backgroundColor = ColorTheme.getThemeColor(colors, "background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
