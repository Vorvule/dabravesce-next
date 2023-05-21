import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const Colors = {
  lightColor: "rgb(229, 229, 231)",
  
  darkColor: "rgb(28, 28, 30)",
};

export const Themes = {
  lightTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
      border: "teal",
    },
  },

  darkTheme: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.darkColor,
      border: "teal",
      card: "black"
    },
  },
};
