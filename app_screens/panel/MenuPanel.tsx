import { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import MenuView from '@/app_screens/index-menu/menu.view';
import SearchView from '@/app_screens/search/search.view';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import PageHeader from '@/components/PageHeader';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function MenuPanel({ standalone }: { standalone?: boolean }) {
  const borderColor = useThemeColor({}, 'border');
  const [showSearch, setShowSearch] = useState(false);
  const panelStyles = { borderRightWidth: 1, borderRightColor: borderColor };

  return (
    <ThemedView style={{ flex: 1, ...(standalone ? {} : panelStyles) }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader
          title="Дабравесце"
          subtitle={showSearch ? 'Пошук' : 'Крыніцы'}
        />

        <Pressable onPress={() => setShowSearch(!showSearch)} >
          <ThemedText type="link" style={ { paddingTop: 24, textAlign: 'center' }} >
            {showSearch ? 'Крыніцы' : 'Пошук па змесце'}
          </ThemedText>
        </Pressable>

        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          {showSearch ? <SearchView /> : <MenuView />}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
