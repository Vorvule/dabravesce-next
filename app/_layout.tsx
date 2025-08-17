import { Appearance } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

import 'react-native-reanimated';

import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import Colors from '@/constants/Colors';

// Wait for asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorSchemeName = Appearance.getColorScheme();

  const MyLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors.light,
    },
  };

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...Colors.dark,
    },
  };

  const theme = colorSchemeName === 'dark' ? MyDarkTheme : MyLightTheme;

  const [loaded] = useFonts({
    Monomakh: require('../assets/fonts/Monomakh-Regular.ttf'),
    Vollkorn: require('../assets/fonts/Vollkorn-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
