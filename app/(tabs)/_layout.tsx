import React from 'react';
import { Tabs } from 'expo-router';

import Daily from '@/functions/Daily';
import GlobalContext from '@/contexts/GlobalContext';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { options } from '@/constants/styles/screen.options';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const dailyKeychain = Daily.getDailyKeychain();
  const [keychain, setKeychain] = React.useState(dailyKeychain);
  const updateKeychain = (newKeychain: number[]) => setKeychain(newKeychain);
  const contextValue = { keychain, updateKeychain, dailyKeychain };

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs screenOptions={options.getScreenOptions(colorScheme)}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Дабравесце',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='cloud' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='menu'
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
            title: 'Старонка',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='book.pages.fill' color={color} />
            ),
          }}
        />
      </Tabs>
    </GlobalContext.Provider>
  );
}
