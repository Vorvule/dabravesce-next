import * as React from "react";
import { useColorScheme, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import AppNavigation from "./AppNavigation";

import { styles } from "../constants/styles";
import { ColorTheme } from "../library/ColorTheme";

export default function AppContainer() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style={useColorScheme()} hidden={true} />

      <NavigationContainer theme={ColorTheme.navigationTheme()}>
        <AppNavigation />
      </NavigationContainer>
    </View>
  );
}
