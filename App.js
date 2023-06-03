import * as React from "react";
import * as Font from "expo-font";
import * as SystemUI from "expo-system-ui";

import AppContainer from "./src/AppContainer";
import { ColorTheme } from "./library/ColorTheme";

const getFonts = () => {
  return Font.loadAsync({
    "comfortaa-bold": require("./assets/fonts/comfortaa-bold.ttf"),
    "comfortaa-regular": require("./assets/fonts/comfortaa-regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  
  const colorTheme = ColorTheme.value();

  React.useEffect(() => {
    colorTheme == "dark" && SystemUI.setBackgroundColorAsync("black");
  });

  if (fontsLoaded) {
    return <AppContainer />;
  }

  getFonts().then(() => setFontsLoaded(true));
  return null;
}
