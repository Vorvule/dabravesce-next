import { useState } from 'react';

import ColumnLayout from '@/applets/layout/column.layout';
import SaintNames from '@/applets/saints/saint.names';
import SearchInput from '@/applets/menu/search/search.input';
import WebHead from '@/components/web.head';
import useSaintNames from '@/hooks/use.saint.names';
import Web from '@/services/web';

export default function SaintsScreen() {
  const [searchText, setSearchText] = useState('');

  const { menNames, womenNames } = useSaintNames(searchText);

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