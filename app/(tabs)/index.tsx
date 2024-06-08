import { Image } from "react-native";

import { IndexContent } from "@/screens/index/IndexContent";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { HeaderStyle, TopStyle } from "@/constants/TopStyles";

export default function IndexScreen() {
  const source = require("@/assets/images/logos/church.png");

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyle.backgroundColor}
      headerImage={<Image source={source} style={TopStyle.image} />}
    >
      <IndexContent />
    </ParallaxScrollView>
  );
}
