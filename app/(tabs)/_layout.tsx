import React from 'react';
import { useWindowDimensions } from 'react-native';

import { GlobalContext } from '@/contexts/global.context';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic.tab';
import { IconSymbol } from '@/components/icons/icon.symbol';
import Daily from '@/services/daily';

import { WIDTH_LIMIT } from '@/constants/breakpoints';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedView from '@/components/themed/themed.view';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const columnIsWide = width > WIDTH_LIMIT.MIDDLE_COLUMN;
  const viewportIsWide = width > WIDTH_LIMIT.WIDE_COLUMN;
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
              flexDirection: columnIsWide ? 'row' : 'column',
              ...(viewportIsWide && { display: 'none' }),
            },
            tabBarLabelStyle: {
              fontFamily: 'Monomakh',
              fontSize: columnIsWide ? 24 : 14,
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
          <Tabs.Screen
            name="index"
            options={{
              title: 'Каляндар',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="calendar" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="calendar"
            options={{ href: null }}
          />
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
        </Tabs>
      </GlobalContext.Provider>
    </ThemedView>
  );
}
