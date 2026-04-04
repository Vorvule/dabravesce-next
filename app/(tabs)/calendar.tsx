import { Image } from 'expo-image';
import { usePathname } from 'expo-router';
import imageSource from '@/assets/images/header/calendire.png';
import Head from 'expo-router/head';

import Device from '@/functions/Device';
import Web from '@/functions/Web';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import ThemedText from '@/components/ThemedText';
import Styles from '@/constants/styles/common.styles';
import CalendarView from '@/app_screens/calendar/view/calendar.view';

export default function CalendarScreen() {
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>Дабравесце ~ Каляндар</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type="title">Праваслаўны Каляндар</ThemedText>
        <CalendarView />
      </ParallaxScrollView>
    </>
  );
}
