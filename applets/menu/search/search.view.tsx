import { useMemo, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import SearchInput from './search.input';
import ThemedText from '@/components/themed/themed.text';
import SearchResults from './search.results';
import Search from '@/services/search';

export default function SearchView() {
  const { q } = useLocalSearchParams<{ q?: string }>();
  const [searchText, setSearchText] = useState(q || '');

  const searchResults = useMemo(
    () => Search.getInSources(searchText),
    [searchText],
  );

  return (
    <>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <ThemedText style={{ textAlign: 'center', paddingTop: 20 }} type="header">
        Вынікаў — {searchResults.length}
      </ThemedText>

      <SearchResults searchResults={searchResults} />
    </>
  );
}