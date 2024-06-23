/**
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#935116";
const tintColorDark = "#FDEBD0";

const Colors = {
  light: {
    text: "#151515", // ~ black
    background: "#FFFFFF", // white
    tint: tintColorLight,
    icon: "#687076", // grey
    tabIconDefault: "#687076", // grey
    tabIconSelected: tintColorLight,
    title: tintColorLight, //
    subtitle: "#834400",
    header: tintColorLight,
    button: "#444444",
  },
  dark: {
    text: "#EEEEEE", // ~ white
    background: "#151515", // ~ black
    tint: tintColorDark,
    icon: "#9BA1A6", // grey
    tabIconDefault: "#9BA1A6", // grey
    tabIconSelected: tintColorDark,
    title: tintColorDark,
    subtitle: "#FCF3CF",
    header: tintColorDark,
    button: "DDDDDD",
  },
};

export default Colors;
