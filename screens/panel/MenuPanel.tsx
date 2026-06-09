import { useState } from 'react';
import { Pressable, ScrollView, StyleProp, TextStyle } from 'react-native';

import MenuView from '@/screens/menu/menu.view';
import SearchView from '@/screens/search/search.view';
import ThemedView from '@/components/themed/ThemedView';
import ThemedText from '@/components/themed/ThemedText';
import PageHeader from '@/components/page/PageHeader';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function MenuPanel({ standalone }: { standalone?: boolean }) {
  const [showSearch, setShowSearch] = useState(false);

  const borderColor = useThemeColor({}, 'border');
  const panelStyles = { borderRightWidth: 1, borderRightColor: borderColor };

  const headerSubtitle= showSearch ? 'Пошук' : 'Крыніцы';

  const linkStyle = { paddingTop: 24, textAlign: 'center' } as StyleProp<TextStyle>;
  const linkText = showSearch ? 'Крыніцы' : 'Пошук па змесце';

  const viewStyle = { padding: 18, paddingBottom: 160 };
  const viewContent = showSearch ? <SearchView /> : <MenuView />;

  return (
    <ThemedView style={{ flex: 1, ...(standalone ? {} : panelStyles) }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader title="Дабравесце" subtitle={headerSubtitle} />

        <Pressable onPress={() => setShowSearch(!showSearch)} >
          <ThemedText type="link" style={linkStyle} >{linkText}</ThemedText>
        </Pressable>

        <ThemedView style={viewStyle}>{viewContent}</ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
