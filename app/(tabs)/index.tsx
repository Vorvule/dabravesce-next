import { Image } from "react-native";
import { usePathname } from "expo-router";
import Head from "expo-router/head";

import IndexContent from "@/app_screens/index/IndexContent";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import headerBackgroundColor from "@/constants/HeaderColors";

import Styles from "@/constants/Styles";
import Device from "@/functions/Device";
import Web from "@/functions/Web";

const dark = "@/assets/images/logos/church-dark.png";
const light = "@/assets/images/logos/church.png";

export default function IndexScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);

  const path = usePathname();

  return (
    <>
      <Head>
        <title>{Web.getTitle(path)}</title>
        <meta name="description" content={Web.getDescription(path)} />
      </Head>

      <ParallaxScrollView
        headerBackgroundColor={headerBackgroundColor}
        headerImage={<Image source={imageSource} style={Styles.image} />}
      >
        <IndexContent />
      </ParallaxScrollView>
    </>
  );
}
