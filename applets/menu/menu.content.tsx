import appSources from '../../assets/albums/app.sources.js';
import AlbumList from '../../applets/menu/album.list';
import MenuFooter from './menu.footer';
import ThemedLink from '../../components/themed/themed.link';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuContent() {
  const style = { textAlign: 'center', paddingTop: 40 };

  return (
    <>
      <AlbumList albums={appSources} />
      <ThemedLink style={style} href={useDailyGospelUrl()} text="Евангелле дня" />
      <MenuFooter />
    </>
  );
}
