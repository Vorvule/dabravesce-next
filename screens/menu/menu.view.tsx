import appSources from '@/assets/albums/app.sources.js';
import AlbumList from '@/screens/menu/AlbumList';
import IndexFooter from '@/screens/menu/IndexFooter';
import ThemedLink from '@/components/themed/ThemedLink';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuView() {
  const gospelUrl = useDailyGospelUrl();
  const style = { textAlign: 'center', paddingTop: 24 };

  return (
    <>
      <AlbumList albums={appSources} />
      <ThemedLink style={style} href={gospelUrl} text="Евангелле дня" />
      <IndexFooter />
    </>
  );
}
