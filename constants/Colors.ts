/**
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0A7EA4"; // marine ~ inner link
const tintColorDark = "#FFF"; // white

export const Colors = {
  light: {
    text: "#11181C", // ~ black
    background: "#FFF", // white
    tint: tintColorLight,
    icon: "#687076", // grey
    tabIconDefault: "#687076", // grey
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE", // light grey
    background: "#151718", // ~ black
    tint: tintColorDark,
    icon: "#9BA1A6", // grey
    tabIconDefault: "#9BA1A6", // grey
    tabIconSelected: tintColorDark,
  },
};
