import { useMemo } from "react";
import { Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { HeaderStyle, TopStyle } from "@/constants/TopStyles";
import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";

export default function SourceScreen() {
  const source = useTheme().dark
    ? require("@/assets/images/logos/book-dark.png")
    : require("@/assets/images/logos/book.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  const urlChain = useLocalSearchParams().source;

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContent(urlChain),
    [urlChain]
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
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
