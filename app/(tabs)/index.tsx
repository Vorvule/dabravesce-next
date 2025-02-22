import { Image } from 'expo-image';
import { usePathname } from 'expo-router';

import IndexContent from '@/app_screens/index/IndexContent';
import MetaData from '@/components/MetaData';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import Device from '@/functions/Device';
import Styles from '@/constants/styles/common.styles';

const dark = '@/assets/images/logos/church-dark.png';
const light = '@/assets/images/logos/church.png';

export default function IndexScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path = usePathname();

  return (
    <>
      <MetaData path={path} />

      <ParallaxScrollView headerImage={headerImage}>
        <IndexContent />
      </ParallaxScrollView>
    </>
  );
}
