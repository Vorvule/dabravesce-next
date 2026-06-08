import appSources from '@/assets/albums/app.sources.js';
import AlbumList from '@/app_screens/index-menu/AlbumList';
import IndexFooter from '@/app_screens/index-menu/IndexFooter';
import ThemedLink from '@/components/ThemedLink';

import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function MenuView() {
  const gospelUrl = useDailyGospelUrl();

  return (
    <>
      <AlbumList albums={appSources} />
      <ThemedLink style={{ textAlign: 'center', paddingTop: 24 }} href={gospelUrl} text="Евангелле дня" />
      <IndexFooter />
    </>
  );
}
