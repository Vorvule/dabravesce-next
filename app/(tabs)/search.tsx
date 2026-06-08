import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/functions/Web';
import PageScrollView from '../../components/PageScrollView';
import SearchView from '../../app_screens/search/search.view';

export default function SearchScreen() {
  const path: string = usePathname();

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Пошук</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title="Пошук" subtitle="Па змесце">
        <SearchView />
      </PageScrollView>
    </>
  );
}
