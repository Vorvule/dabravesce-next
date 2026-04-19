import React from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';

import Daily from '@/functions/Daily';
import Device from '@/functions/Device';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/components/ThemedView';

export default function TabLayout() {
  const dailyKeychain: number[] = Daily.getDailyKeychain();
  const [keychain, setKeychain] = React.useState(dailyKeychain);

  const updateKeychain: (newKeychain: number[]) => void = (
    newKeychain: number[],
  ): void => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };

  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const activeColor = useThemeColor({}, 'link');

  return (
    <ThemedView style={{ flex: 1 }}>
      <GlobalContext.Provider value={contextValue}>
        <Tabs
          screenOptions={() => ({
            tabBarActiveTintColor: activeColor,
            headerShown: false,
            tabBarInactiveTintColor: borderColor,
            tabBarButton: HapticTab,
            tabBarStyle: {
              backgroundColor,
              flexDirection: Device.windowIsWide() ? 'row' : 'column',
            },
            tabBarLabelStyle: {
              fontFamily: 'Monomakh',
              fontSize: Device.windowIsWide() ? 24 : 14,
              marginLeft: Device.windowIsWide() ? 8 : 0,
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
          })}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Крыніцы',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="menucard" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="page/[slugchain]"
            options={{
              title: 'Змест',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="book.pages.fill" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: 'Пошук',
              tabBarIcon: ({ color }) => (
                <IconSymbol name="magnifyingglass" color={color} />
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
