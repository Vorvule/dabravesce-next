import { Pressable, StyleProp, TextStyle } from 'react-native';

import appSources from '@/assets/albums/app.sources.js';
import AlbumList from '@/applets/menu/album.list';
import MenuFooter from './menu.footer';
import ThemedLink from '@/components/themed/themed.link';
import ThemedText from '@/components/themed/themed.text';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuContent({ onSearch }: { onSearch: () => void }) {
  const style = { textAlign: 'center', paddingTop: 40 } as StyleProp<TextStyle>;

  return (
    <>
      <AlbumList albums={appSources} />
      <ThemedLink style={style} href={useDailyGospelUrl()} text="Евангелле дня" />
      <ThemedLink style={style} href="/saints" text="Звод імёнаў Святых" />
      <Pressable onPress={onSearch}>
        <ThemedText type="link" style={style}>Пошук па змесце</ThemedText>
      </Pressable>
      <MenuFooter />
    </>
  );
}
