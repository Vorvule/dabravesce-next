import { JSX } from 'react';

import { SearchResult } from '@/services/search';
import searchStyles from '@/applets/search/search.styles';
import ThemedLink from '@/components/themed/themed.link';

export default function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}): JSX.Element[] {
  return searchResults.map((item) => {
    return (
      <ThemedLink
        key={item.slugChain}
        style={searchStyles.link}
        href={item.slugChain}
        type="default"
        text={item.nameChain}
      />
    );
  });
}
