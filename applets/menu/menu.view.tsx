import { useState } from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';

import appSources from '../../assets/albums/app.sources.js';
import AlbumList from '../../applets/menu/album.list';
import IndexFooter from '../../applets/menu/index.footer';
import SearchView from '../../applets/search/search.view';
import ThemedText from '../../components/themed/themed.text';
import ThemedLink from '../../components/themed/themed.link';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuView() {
  const [showSearch, setShowSearch] = useState(false);
  const gospelUrl = useDailyGospelUrl();
  const linkStyle = { paddingBottom: 24, textAlign: 'center' } as StyleProp<TextStyle>;
  const linkText = showSearch ? 'Крыніцы' : 'Пошук па змесце';

  return (
    <>
      <Pressable onPress={() => setShowSearch(!showSearch)}>
        <ThemedText type="link" style={linkStyle}>{linkText}</ThemedText>
      </Pressable>

      {showSearch ? (
        <SearchView />
      ) : (
        <>
          <AlbumList albums={appSources} />
          <ThemedLink
            style={{ textAlign: 'center', paddingTop: 40 }}
            href={gospelUrl}
            text="Евангелле дня"
          />
          <IndexFooter />
        </>
      )}
    </>
  );
}
