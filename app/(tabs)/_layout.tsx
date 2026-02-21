import React from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';

import Daily from '@/functions/Daily';
import Device from '@/functions/Device';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabLayout() {
  const dailyKeychain: number[] = Daily.getDailyKeychain();
  const [keychain, setKeychain] = React.useState(dailyKeychain);

  const updateKeychain: (newKeychain: number[]) => void = (
    newKeychain: number[]
  ): void => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: useThemeColor({}, 'link'),
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarStyle: { backgroundColor: useThemeColor({}, 'background') },
          tabBarLabelStyle: {
            fontFamily: 'Monomakh',
            fontSize: Device.windowIsWide() ? 24 : 14,
          },
          tabBarItemStyle: {
            borderLeftWidth: 0,
            borderRightColor: 'grey',
            borderRightWidth: 2,
            borderTopColor: 'grey',
            borderTopWidth: 2,
            borderTopRightRadius: 10,
          },
          tabBarIconStyle: {
            marginTop: -4,
            marginBottom: -4,
          },
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Крыніцы',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='menucard' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='page/[slugchain]'
          options={{
            title: 'Змест',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='book.pages.fill' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: 'Пошук',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='magnifyingglass' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='calendar'
          options={{
            title: 'Каляндар',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='calendar' color={color} />
            ),
          }}
        />
      </Tabs>
    </GlobalContext.Provider>
  );
}
