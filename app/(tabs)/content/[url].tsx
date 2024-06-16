import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  usePathname,
  useSegments,
} from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/screens/source/SourceContent";
import { CorePage } from "@/service/CorePage";

import { useTheme } from "@react-navigation/native";
import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import ChainContext from "@/contexts/ChainContext";
import Content from "@/service/Content";

const dark = "@/assets/images/logos/book-dark.png";
const light = "@/assets/images/logos/book.png";

export default function SourceScreen() {
  const pathname = usePathname();
  console.log("Pathname: " + pathname);

  const { setChain, dailyChain } = useContext(ChainContext);
  const { url } = useLocalSearchParams();

  const sourceIsValid = CorePage.isValid(url);

  const sourceChain = sourceIsValid
    ? (url as string).split("-")
    : dailyChain;
  console.log("New source chain " + sourceChain);

  const contentUrl = Content.getContentUrl(sourceChain);

  useFocusEffect(
    useCallback(() => {
      setChain(sourceChain);
      console.log("The chain set " + sourceChain);

      !sourceIsValid && router.replace(contentUrl);
    }, [url])
  );

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContents(sourceChain),
    [url]
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
