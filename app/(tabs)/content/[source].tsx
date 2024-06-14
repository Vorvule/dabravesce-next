import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import { useFocusEffect, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";
import { ChainContext } from "@/contexts/ChainContext";

export default function SourceScreen() {
  const image = useTheme().dark
    ? require("@/assets/images/logos/book-dark.png")
    : require("@/assets/images/logos/book.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  const { source } = useLocalSearchParams();
  const { chain, setChain, dailyChain } = useContext(ChainContext);

  useFocusEffect(
    useCallback(() => {
      console.log("Url params: " + source);
      if (CorePage.isValid(source)) {
        const newChain = (source as string).split("-")
        setChain(newChain);
        console.log("New context chain: " + newChain);
      } else {
        setChain(dailyChain);
        console.log("Retrieved daily chain: " + dailyChain);
      }
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
