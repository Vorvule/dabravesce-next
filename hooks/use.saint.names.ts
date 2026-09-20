import { useMemo } from 'react';

import saintNamesMen from '@/assets/saints/saint.names.men.json';
import saintNamesWomen from '@/assets/saints/saint.names.women.json';

export default function useSaintNames(searchText: string): {
  menNames: string[];
  womenNames: string[];
} {
  const query = searchText.trim().replace(/\s+/g, ' ').toLowerCase();

  const menNames = useMemo(
    () => query ? saintNamesMen.filter((name) => name.toLowerCase().includes(query)) : saintNamesMen,
    [query],
  );

  const womenNames = useMemo(
    () => query ? saintNamesWomen.filter((name) => name.toLowerCase().includes(query)) : saintNamesWomen,
    [query],
  );

  return { menNames, womenNames };
}