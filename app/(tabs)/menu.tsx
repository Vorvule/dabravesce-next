import { Image } from 'expo-image';
import { usePathname } from 'expo-router';

import AppSources from '@/assets/albums/AppSources';
import Device from '@/functions/Device';
import MetaData from '@/components/MetaData';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Styles from '@/constants/styles/common.styles';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import AlbumList from '@/app_screens/menu/AlbumList';

const dark = '@/assets/images/logos/books-dark.png';
const light = '@/assets/images/logos/books.png';

export default function MenuScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  return (
    <>
      <MetaData path={path} />

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type='title'>Дабравесце</ThemedText>
        <ThemedText type='subtitle' style={Styles.centered}>
          Крыніцы
        </ThemedText>

        <ThemedView>
          <AlbumList albums={AppSources} />
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}
