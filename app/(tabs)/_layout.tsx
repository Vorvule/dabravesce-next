import React from 'react';
import { Tabs } from 'expo-router';

import Daily from '@/functions/Daily';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { GlobalContext } from '@/contexts/GlobalContext';
import { options } from '@/constants/styles/screen.options';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const dailyKeychain: number[] = Daily.getDailyKeychain();
  const [keychain, setKeychain] = React.useState(dailyKeychain);
  const updateKeychain: (newKeychain: number[]) => void = (
    newKeychain: number[],
  ): void => setKeychain(newKeychain);

  const contextValue = { keychain, updateKeychain, dailyKeychain };
  const colorScheme = useColorScheme();

  return (
    <GlobalContext.Provider value={contextValue}>
      <Tabs screenOptions={options.getScreenOptions(colorScheme)}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Змест',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='menucard' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='page/[slugchain]'
          options={{
            title: 'Крыніцы',
            tabBarIcon: ({ color }) => (
              <IconSymbol name='book.pages.fill' color={color} />
            ),
          }}
        />
      </Tabs>
    </GlobalContext.Provider>
  );
}
