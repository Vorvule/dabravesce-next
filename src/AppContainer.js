import * as React from "react";
import { useColorScheme, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";

import AppNavigation from "./AppNavigation";

import { styles } from "../constants/styles";
import { ColorTheme } from "../library/ColorTheme";

export default function AppContainer() {
  const colorTheme = ColorTheme.value();

  React.useEffect(() => {
    colorTheme == "dark" && SystemUI.setBackgroundColorAsync("black");
  });

  return (
    <View style={styles.appContainer}>
      <StatusBar style={useColorScheme()} hidden={true} />

      <NavigationContainer theme={ColorTheme.navigationTheme()}>
        <AppNavigation />
      </NavigationContainer>
    </View>
  );
}
