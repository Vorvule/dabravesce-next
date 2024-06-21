import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/app_screens/content/AppContent";

import { useTheme } from "@react-navigation/native";
import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import GlobalContext from "@/contexts/GlobalContext";
import Content from "@/functions/Content";

const dark = "@/assets/images/logos/book-dark.png";
const light = "@/assets/images/logos/book.png";

export default function SourceScreen() {
  const { setKeychain, dailyKeychain } = useContext(GlobalContext);

  const { url } = useLocalSearchParams();
  const urlIsValid: boolean = Content.urlIsValid(url as string);

  const newKeychain: number[] = useMemo(
    () => (urlIsValid ? Content.getKeychain(url as string) : dailyKeychain),
    [url]
  );

  const { albumName, bookName, chapter } = useMemo(
    () => Content.getContent(newKeychain),
    [newKeychain]
  );

  useFocusEffect(
    useCallback(() => {
      setKeychain(newKeychain);

      !urlIsValid && router.replace(Content.getUrl(newKeychain));
    }, [newKeychain])
  );

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
      <SourceContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ParallaxScrollView>
  );
}
