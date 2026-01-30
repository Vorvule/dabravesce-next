import { useCallback, useContext, useMemo } from 'react';
import { Image } from 'expo-image';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import PageContent from '@/app_screens/content-page/PageContent';

import AppSources from '@/assets/albums/AppSources';
import Styles from '@/constants/styles/common.styles';
import { GlobalContext } from '@/contexts/GlobalContext';

import Device from '@/functions/Device';
import Page from '@/functions/Page';
import Web from '@/functions/Web';

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const slugChains: { slugchain: string }[] = [];
  AppSources.map((album) => {
    album.text.map((book) => {
      book.text.map((chapter) => {
        const slugchain = [album.slug, book.slug, chapter.slug].join('~');
        slugChains.push({ slugchain });
      });
    });
  });

  return slugChains;
}

export default function PageScreen() {
  const imageSource = require('@/assets/images/header/opened-book.png');
  const headerImage = <Image source={ imageSource } style={ Styles.image } />;

  const slugChain: string = useLocalSearchParams().slugchain as string;
  const validSlugChain: boolean = Page.slugchainValid(slugChain);

  const { dailyKeychain, updateKeychain } = useContext(GlobalContext);

  const keychain: number[] = useMemo(
    () => (validSlugChain ? Page.getKeychain(slugChain) : dailyKeychain),
    [dailyKeychain, slugChain, validSlugChain]
  );

  useFocusEffect(
    useCallback(() => {
      return validSlugChain
        ? updateKeychain(keychain)
        : router.replace(Page.getUrl(keychain));
    }, [keychain, updateKeychain, validSlugChain])
  );

  return (
    <>
      { Device.platformIsWeb() && (
        <Head>
          <title>{ Web.getPageTitle(keychain) }</title>
          <meta name="description" content={ Web.getPageDescription(keychain) } />
        </Head>
      ) }

      <ParallaxScrollView headerImage={ headerImage }>
        <PageContent keychain={ keychain } />
      </ParallaxScrollView>
    </>
  );
}
