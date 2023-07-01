import * as React from "react";
import * as SystemUI from "expo-system-ui";

import AppContainer from "./src/AppContainer";
import { ColorTheme } from "./src/service/ColorTheme";

export default function App() {
  const colorTheme = ColorTheme.value();

  React.useEffect(() => {
    colorTheme == "dark" && SystemUI.setBackgroundColorAsync("black");
  }, [colorTheme]);

  return <AppContainer />;
}
