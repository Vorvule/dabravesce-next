import { useCallback, useMemo } from "react";
import { Image } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import { DailyChain } from "@/service/DailyChain";

export default function SourceScreen() {
  const image = useTheme().dark
    ? require("@/assets/images/logos/book-dark.png")
    : require("@/assets/images/logos/book.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  

  const { source } = useLocalSearchParams();
  console.log("Use local search params give: " + source);

  useFocusEffect(
    useCallback(() => {
      console.log("Focused!");

      if (source === undefined) {
        console.log("The source " + source + " is undefined!");
        router.push("content/" + DailyChain.getDailyChain().join("-"));
      }

      return () => {
        console.log("Unfocused!");
      };
    }, [source])
  );

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
