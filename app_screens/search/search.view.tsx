import { useState } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import SearchInput from './search.input';
import ThemedText from '../../components/ThemedText';
import SearchResults from './search.results';
import Search, { SearchResult } from '../../functions/Search';

export default function SearchView() {
  const { q } = useLocalSearchParams<{ q?: string }>();
  const [searchText, setSearchText] = useState(q || '');
  const [searchResults, setSearchResults] = useState<SearchResult[]>(
    q ? Search.getInSources(q) : [],
  );

  const handleSearch = () => {
    const results = Search.getInSources(searchText);
    setSearchResults(results);
    router.setParams({ q: searchText || undefined });
  };

  return (
    <>
      <SearchInput searchText={searchText} setSearchText={setSearchText} onPress={handleSearch} />

      <ThemedText style={{ textAlign: 'center', paddingTop: 20 }} type="header">
        Вынікаў — {searchResults.length}
      </ThemedText>

      <SearchResults searchResults={searchResults} />
    </>
  );
}
