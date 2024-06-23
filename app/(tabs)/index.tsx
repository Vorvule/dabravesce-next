import { Image } from "react-native";

import IndexContent from "@/app_screens/index/IndexContent";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import Device from "@/functions/Device";

const dark = "@/assets/images/logos/church-dark.png";
const light = "@/assets/images/logos/church.png";

export default function IndexScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={imageSource} style={Styles.image} />}
    >
      <IndexContent />
    </ParallaxScrollView>
  );
}
