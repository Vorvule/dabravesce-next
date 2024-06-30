import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import PageContent from "@/app_screens/content/PageContent";

import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import GlobalContext from "@/contexts/GlobalContext";
import Content from "@/functions/Content";
import Device from "@/functions/Device";

const dark = "@/assets/images/logos/book-dark.png";
const light = "@/assets/images/logos/book.png";

export default function SourceScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);

  const { setKeychain, dailyKeychain } = useContext(GlobalContext);

  const { url } = useLocalSearchParams();
  const urlIsValid: boolean = Content.urlIsValid(url as string);

  const keychain: number[] = useMemo(
    () => (urlIsValid ? Content.getKeychain(url as string) : dailyKeychain),
    [url]
  );

  useFocusEffect(
    useCallback(() => {
      setKeychain(keychain);

      !urlIsValid && router.replace(Content.getUrl(keychain));
    }, [keychain])
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={imageSource} style={Styles.image} />}
    >
      <PageContent keychain={keychain} />
    </ParallaxScrollView>
  );
}
