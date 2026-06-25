import { useCallback, useContext, useMemo } from 'react';
import { Platform } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import Head from 'expo-router/head';

import ColumnLayout from '../../../applets/layout/column.layout';
import PageView from '../../../applets/page/page.view';

import appSources from '@/assets/albums/app.sources';
import { GlobalContext } from '@/contexts/global.context';

import Page from '@/services/page';
import Web from '@/services/web';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  const slugChains: { slugchain: string }[] = [];
  appSources.map((album: any ) => {
    album.text.map((book: any) => {
      book.text.map((chapter: any) => {
        const slugchain = [album.slug, book.slug, chapter.slug].join('~');
        slugChains.push({ slugchain });
      });
    });
  });

  return slugChains;
}

export default function PageScreen() {
  const slugChain: string = useLocalSearchParams().slugchain as string;
  const validSlugChain: boolean = Page.slugchainValid(slugChain);

  const { dailyKeychain, updateKeychain } = useContext(GlobalContext);

  const keychain: number[] = useMemo(
    () => (validSlugChain ? Page.getKeychain(slugChain) : dailyKeychain),
    [dailyKeychain, slugChain, validSlugChain],
  );

  const { albumName, bookName, chapter } = useMemo(
    () => Page.getContent(keychain),
    [keychain],
  );

  useFocusEffect(
    useCallback(() => {
      return validSlugChain
        ? updateKeychain(keychain)
        : router.replace(Page.getUrl(keychain));
    }, [keychain, updateKeychain, validSlugChain]),
  );

  return (
    <>
      { Platform.OS === 'web' && (
        <Head>
          <title>{ Web.getPageTitle(keychain) }</title>
          <meta name="description" content={ Web.getPageDescription(keychain) } />
        </Head>
      ) }

      <ColumnLayout title={ albumName } subtitle={ bookName }>
        <PageView chapter={ chapter } keychain={ keychain }/>
      </ColumnLayout>
    </>
  );
}
