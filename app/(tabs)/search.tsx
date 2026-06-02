import { useState } from 'react';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Device from '@/functions/Device';
import Web from '@/functions/Web';
import ThemedText from '@/components/ThemedText';
import PageScrollView from '../../components/PageScrollView';
import Search, { SearchResult } from '@/functions/Search';
import Styles from '@/constants/styles/common.styles';
import SearchResults from '@/app_screens/search/search.results';
import SearchInput from '@/app_screens/search/search.input';

export default function SearchScreen() {
  const path: string = usePathname();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = () => {
    setSearchResults(Search.getInSources(searchText));
  };

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>Дабравесце ~ Пошук</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title="Пошук" subtitle="Па змесце">
        <SearchInput searchText={searchText} setSearchText={setSearchText} onPress={handleSearch} />

        <ThemedText style={[Styles.centered, { paddingTop: 20 }]} type="header">
          Вынікаў — {searchResults.length}
        </ThemedText>

        <SearchResults searchResults={searchResults} />
      </PageScrollView>
    </>
  );
}
