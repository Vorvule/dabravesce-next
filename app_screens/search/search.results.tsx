import { JSX } from 'react';

import { SearchResult } from '@/functions/Search';
import searchStyles from '@/app_screens/search/search.styles';
import ThemedLink from '@/components/ThemedLink';

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
        href={`/page/${item.slugChain}`}
        type='default'
        text={item.nameChain}
      />
    );
  });
}
