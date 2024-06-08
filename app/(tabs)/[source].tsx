import { useMemo } from "react";
import { Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { HeaderStyle, TopStyle } from "@/constants/TopStyles";

export default function SourceScreen() {
  const source = require("@/assets/images/logos/book.png");

  const urlChain = useLocalSearchParams().source;

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContent(urlChain),
    [urlChain]
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyle.backgroundColor}
      headerImage={<Image source={source} style={TopStyle.image} />}
    >
      <SourceContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ParallaxScrollView>
  );
}
