import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  Stack,
} from 'expo-router';

import 'react-native-reanimated';
import '@/constants/styles/hidden.scrollbars.css';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { GlobalContext } from '@/contexts/global.context';
import Daily from '@/services/daily';
import Colors from '@/constants/colors';

SplashScreen.setOptions({ duration: 1000, fade: true });
SplashScreen.preventAutoHideAsync(); // Wait for asset loading is complete

export default function RootLayout() {
  const colorSchemeName = useColorScheme();

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

  const dailyKeychain: number[] = React.useMemo(() => Daily.getDailyKeychain(), []);
  const [keychain, setKeychain] = React.useState(dailyKeychain);
  const [menuKeychain, setMenuKeychain] = React.useState<number[] | null>(null);

  const updateKeychain = React.useCallback(
    (newKeychain: number[]) => setKeychain(newKeychain),
    []);

  const updateMenuKeychain = React.useCallback(
    (newMenuKeychain: number[] | null) => setMenuKeychain(newMenuKeychain),
    []);

  const contextValue = React.useMemo(
    () => ({ keychain, updateKeychain, dailyKeychain, menuKeychain, updateMenuKeychain }),
    [keychain, updateKeychain, dailyKeychain, menuKeychain, updateMenuKeychain],
  );

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={theme}>
      <GlobalContext.Provider value={contextValue}>
        <StatusBar hidden />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="donation" />
          <Stack.Screen name="saints" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
