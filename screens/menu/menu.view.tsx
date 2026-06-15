import appSources from '@/assets/albums/app.sources.js';
import AlbumList from '@/screens/menu/album.list';
import IndexFooter from '@/screens/menu/index.footer';
import ThemedLink from '@/components/themed/themed.link';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuView() {
  const gospelUrl = useDailyGospelUrl();
  const style = { textAlign: 'center', paddingTop: 36 };

  return (
    <>
      <AlbumList albums={appSources} />
      <ThemedLink style={style} href={gospelUrl} text="Евангелле дня" />
      <IndexFooter />
    </>
  );
}
