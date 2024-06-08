import { useMemo } from "react";
import { Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { HeaderStyle, ImageStyle } from "@/constants/TopStyles";

export default function TabTwoScreen() {
  const imageUrl = "@/assets/images/logos/book.png";
  const imageSource = useMemo(() => require(imageUrl), [imageUrl]);

  const urlChain = useLocalSearchParams().source;
  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContent(urlChain),
    [urlChain]
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyle.backgroundColor}
      headerImage={
        <Image source={imageSource} style={ImageStyle.headerImage} />
      }
    >
      <SourceContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ParallaxScrollView>
  );
}
