import { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';

import appSources from '@/assets/albums/app.sources.js';
import AlbumList from '@/app_screens/index-menu/AlbumList';
import SearchView from '@/app_screens/search/search.view';
import IndexFooter from '@/app_screens/index-menu/IndexFooter';
import ThemedView from '@/components/ThemedView';
import ThemedLink from '@/components/ThemedLink';
import ThemedText from '@/components/ThemedText';
import PageHeader from '@/components/PageHeader';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function LeftPanel() {
  const borderColor = useThemeColor({}, 'border');
  const [showSearch, setShowSearch] = useState(false);
  const gospelUrl = useDailyGospelUrl();

  return (
    <ThemedView style={{ flex: 1, borderRightWidth: 1, borderRightColor: borderColor }}>
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
          {showSearch ? (
            <SearchView />
          ) : (
            <>
              <AlbumList albums={appSources} />
              <ThemedLink style={{ textAlign: 'center', paddingTop: 24 }} href={gospelUrl} text="Евангелле дня" />
              <IndexFooter />
            </>
          )}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
