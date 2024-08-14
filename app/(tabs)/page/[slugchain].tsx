import { useCallback, useContext, useMemo } from "react";
import { Image } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import PageContent from "@/app_screens/page/PageContent";

import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";
import GlobalContext from "@/contexts/GlobalContext";

import Page from "@/functions/Page";
import Device from "@/functions/Device";
import Web from "@/functions/Web";

const dark = "@/assets/images/logos/book-dark.png";
const light = "@/assets/images/logos/book.png";

export default function PageScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);

  const slugchain: string = useLocalSearchParams().slugchain as string;
  const validSlugchain: boolean = Page.slugchainValid(slugchain);

  const { dailyKeychain, updateKeychain } = useContext(GlobalContext);

  const keychain: number[] = useMemo(
    () => (validSlugchain ? Page.getKeychain(slugchain) : dailyKeychain),
    [slugchain]
  );

  useFocusEffect(
    useCallback(() => {
      validSlugchain
        ? updateKeychain(keychain)
        : router.replace(Page.getUrl(keychain));
    }, [keychain])
  );

  return (
    <>
      <Head>
        <title>{Web.getPageTitle(keychain)}</title>
        <meta name="description" content={Web.getPageDescription(keychain)} />
      </Head>

      <ParallaxScrollView
        headerBackgroundColor={headerBackgroundColor}
        headerImage={<Image source={imageSource} style={Styles.image} />}
      >
        <PageContent keychain={keychain} />
      </ParallaxScrollView>
    </>
  );
}
