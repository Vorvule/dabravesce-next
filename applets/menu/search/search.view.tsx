import { useMemo, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import SearchInput from './search.input';
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

      <SearchResults searchResults={searchResults} />
    </>
  );
}
