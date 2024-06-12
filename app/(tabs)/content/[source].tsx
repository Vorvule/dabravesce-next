import { useMemo } from "react";
import { Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";

export default function SourceScreen() {
  const image = useTheme().dark
    ? require("@/assets/images/logos/book-dark.png")
    : require("@/assets/images/logos/book.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  const { source } = useLocalSearchParams();

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContent(source),
    [source]
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={image} style={Styles.image} />}
    >
      <SourceContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ParallaxScrollView>
  );
}
