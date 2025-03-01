import { Image } from 'expo-image';
import { usePathname } from 'expo-router';

import AppSources from '@/assets/albums/AppSources';
import Styles from '@/constants/styles/common.styles';

import Device from '@/functions/Device';

import AlbumList from '@/app_screens/index/AlbumList';
import IndexFooter from '@/app_screens/index/IndexFooter';
import MetaData from '@/components/MetaData';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import DailyGospel from '@/app_screens/index/DailyGospel';

const dark = '@/assets/images/logos/books-dark.png';
const light = '@/assets/images/logos/books.png';

// import mapSources from '@/functions/mapping/SourceMapper';
// import createSiteMap from '@/functions/sitemap/SiteMapper';

export default function IndexScreen() {
  // mapSources();
  // createSiteMap();

  const imageSource = Device.themeIsDark() ? require(dark) : require(light);
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  return (
    <>
      <MetaData path={path} />

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type='title'>Дабравесце</ThemedText>

        <ThemedText type='subtitle' style={Styles.centered}>
          Змест
        </ThemedText>

        <ThemedView>
          <AlbumList albums={AppSources} />
        </ThemedView>

        <DailyGospel />

        <IndexFooter />
      </ParallaxScrollView>
    </>
  );
}
