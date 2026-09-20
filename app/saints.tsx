import { useMemo, useState } from 'react';

import saintNamesMen from '@/assets/saints/saint.names.men.json';
import saintNamesWomen from '@/assets/saints/saint.names.women.json';
import ColumnLayout from '@/applets/layout/column.layout';
import SaintNames from '@/applets/saints/saint.names';
import SearchInput from '@/applets/menu/search/search.input';
import WebHead from '@/components/web.head';
import Web from '@/services/web';

export default function SaintsScreen() {
  const [searchText, setSearchText] = useState('');

  const query = searchText.trim().replace(/\s+/g, ' ').toLowerCase();

  const menNames = useMemo(
    () => query ? saintNamesMen.filter((name) => name.toLowerCase().includes(query)) : saintNamesMen,
    [query],
  );

  const womenNames = useMemo(
    () => query ? saintNamesWomen.filter((name) => name.toLowerCase().includes(query)) : saintNamesWomen,
    [query],
  );

  return (
    <>
      <WebHead name="Звод імёнаў Святых" description={Web.getDescription('/saints')} />

      <ColumnLayout title="Звод" subtitle="Імёнаў Святых">
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          placeholder="Пошук імён"
        />

        <SaintNames title="Мужчынскія імёны" names={menNames} />
        <SaintNames title="Жаночыя імёны" names={womenNames} />
      </ColumnLayout>
    </>
  );
}
