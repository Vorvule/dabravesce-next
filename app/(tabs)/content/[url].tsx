import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  usePathname,
} from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import SourceContent from "@/app_screens/content/AppContent";
import { CorePage } from "@/functions/CorePage";

import { useTheme } from "@react-navigation/native";
import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import ChainContext from "@/contexts/ChainContext";
import ContentService from "@/functions/ContentService";
import Daily from "@/functions/Daily";

const dark = "@/assets/images/logos/book-dark.png";
const light = "@/assets/images/logos/book.png";

export default function SourceScreen() {
  const { setChain, dailyChain } = useContext(ChainContext);

  const { url } = useLocalSearchParams();
  console.log("Local Search Params: " + url, typeof url); // slugChain

  const urlIsValid: boolean = ContentService.urlIsValid(url as string);

  const urlKeychain: number[] = urlIsValid
    ? ContentService.getKeychain(url as string)
    : dailyChain;

  console.log("Url Keychain " + urlKeychain);

  // const keychainIsValid: boolean = ContentService.keychainIsValid(urlKeychain);

  // const newKeychain: number[] = useMemo(() => {
  //   return keychainIsValid ? urlKeychain : dailyChain;
  // }, [url]);

  const { albumName, bookName, chapter } = useMemo(
    () => ContentService.getContent(urlKeychain),
    [urlKeychain]
  );

  useFocusEffect(
    useCallback(() => {
      setChain(urlKeychain);
      console.log("Url keychain " + urlKeychain);

      // const validUrl = ContentService.getContentUrl(newKeychain);
      !urlIsValid && router.replace(ContentService.getUrl(urlKeychain));
    }, [urlKeychain])
  );

  // ====================

  // const sourceIsValid = CorePage.isValid(url);

  // const updatedKeychain = sourceIsValid
  //   ? (url as string).split("~")
  //   : dailyChain;

  // const contentUrl = ContentService.getContentUrl(updatedKeychain);

  // const { albumName, bookName, chapter } = useMemo(
  //   () => CorePage.getContents(updatedKeychain),
  //   [url]
  // );

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
