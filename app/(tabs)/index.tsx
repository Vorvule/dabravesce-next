import { useMemo } from "react";
import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

import { HeaderStyle, ImageStyle } from "@/constants/TopStyles";
import { IndexContent } from "@/screens/index/IndexContent";

export default function HomeScreen() {
  const imageUrl = "@/assets/images/logos/church.png";
  const imageSource = useMemo(() => require(imageUrl), [imageUrl]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyle.backgroundColor}
      headerImage={
        <Image source={imageSource} style={ImageStyle.headerImage} />
      }
    >
      <IndexContent />
    </ParallaxScrollView>
  );
}
