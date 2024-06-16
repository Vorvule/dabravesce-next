import { Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import { IndexContent } from "@/screens/index/IndexContent";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { headerBackgroundColor } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";

const dark = "@/assets/images/logos/church-dark.png";
const light = "@/assets/images/logos/church.png";

export default function IndexScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={
        <Image
          source={useTheme().dark ? require(dark) : require(light)}
          style={Styles.image}
        />
      }
    >
      <IndexContent />
    </ParallaxScrollView>
  );
}
