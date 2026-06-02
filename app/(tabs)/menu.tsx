import { usePathname } from 'expo-router';
import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

import appSources from '@/assets/albums/app.sources.js';
import Head from 'expo-router/head';
import Styles from '@/constants/styles/common.styles';

import PageScrollView from '@/components/PageScrollView';
import ThemedView from '@/components/ThemedView';
import ThemedLink from '@/components/ThemedLink';
import AlbumList from '@/app_screens/index-menu/AlbumList';
import IndexFooter from '@/app_screens/index-menu/IndexFooter';

import Web from '@/functions/Web';
import Device from '@/functions/Device';

// import mapSources from '@/functions/mapping/SourceMapper';
// import createSiteMap from '@/functions/sitemap/SiteMapper';

export default function IndexScreen() {
  // mapSources();
  // createSiteMap();

  const { centered } = Styles;

  const path: string = usePathname();
  const gospelUrl: string = useDailyGospelUrl();

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title="Дабравесце" subtitle="Крыніцы" >
        <ThemedView style={{ marginBottom: 60 }}>
          <AlbumList albums={appSources} />
        </ThemedView>

        <ThemedLink style={centered} href={gospelUrl} text="Евангелле дня" />
        <ThemedLink style={centered} href="/" text="Праваслаўны каляндар" />
        <ThemedLink style={centered} href="/search" text="Пошук па змесце" />

        <IndexFooter />
      </PageScrollView>
    </>
  );
}
