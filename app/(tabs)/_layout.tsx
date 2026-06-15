import React from 'react';
import { useWindowDimensions } from 'react-native';

import { GlobalContext } from '@/contexts/global.context';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic.tab';
import { IconSymbol } from '@/components/icons/icon.symbol';
import Daily from '@/services/daily';

import { VERY_WIDE } from '@/constants/breakpoints';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedView from '@/components/themed/themed.view';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isWide = width > 800;
  const isVeryWide = width > VERY_WIDE;
  const dailyKeychain: number[] = React.useMemo(() => Daily.getDailyKeychain(), []);
  const [keychain, setKeychain] = React.useState(dailyKeychain);

  const updateKeychain = React.useCallback(
    (newKeychain: number[]) => setKeychain(newKeychain),
    []);

  const contextValue = React.useMemo(
    () => ({ keychain, updateKeychain, dailyKeychain }),
    [keychain, updateKeychain, dailyKeychain],
  );

  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const activeColor = useThemeColor({}, 'link');

  return (
    <ThemedView style={{ flex: 1 }}>
      <GlobalContext.Provider value={contextValue}>
        <Tabs
          backBehavior="history"
          screenOptions={{
            tabBarActiveTintColor: activeColor,
            headerShown: false,
            tabBarInactiveTintColor: borderColor,
            tabBarButton: HapticTab,
            tabBarStyle: {
              borderColor: backgroundColor,
              backgroundColor,
              flexDirection: isWide ? 'row' : 'column',
              ...(isVeryWide && { display: 'none' }),
            },
            tabBarLabelStyle: {
              fontFamily: 'Monomakh',
              fontSize: isWide ? 24 : 14,
              marginLeft: isWide ? 8 : 0,
            },
            tabBarItemStyle: {
              borderLeftWidth: 0,
              borderRightColor: borderColor,
              borderRightWidth: 2,
              borderTopColor: borderColor,
              borderTopWidth: 2,
              borderTopRightRadius: 10,
              flexDirection: 'row',
            },
            tabBarIconStyle: {
              marginTop: -4,
              marginBottom: -4,
            },
          }}>
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen
            name="menu"
            options={{
              title: 'Крыніцы',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="menucard" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="[slugchain]"
            options={{
              title: 'Змест',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="book.pages.fill" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="calendar"
            options={{
              title: 'Каляндар',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="calendar" color={color} />
              ),
            }}
          />
        </Tabs>
      </GlobalContext.Provider>
    </ThemedView>
  );
}
