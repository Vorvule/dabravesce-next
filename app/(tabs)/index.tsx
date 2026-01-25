import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

import AppSources from '@/assets/albums/AppSources';
import Head from 'expo-router/head';
import Styles from '@/constants/styles/common.styles';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
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

  const imageSource = require('@/assets/images/header/book-pile.png');
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();
  const gospelUrl: string = useDailyGospelUrl();

  const { centered } = Styles;

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name='description' content={Web.getDescription(path)} />
        </Head>
      )}

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type='title'>Дабравесце</ThemedText>

        <ThemedText type='subtitle' style={centered}>
          Змест
        </ThemedText>

        <ThemedView style={{ marginBottom: 60 }}>
          <AlbumList albums={AppSources} />
        </ThemedView>

        <ThemedLink style={centered} href={gospelUrl} text='Евангелле дня' />
        <ThemedLink style={centered} href='/search' text='Пошук па змесце' />

        <IndexFooter />
      </ParallaxScrollView>
    </>
  );
}
