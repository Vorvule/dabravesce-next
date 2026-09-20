import { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';

import saintNamesMen from '@/assets/saints/saint.names.men.json';
import saintNamesWomen from '@/assets/saints/saint.names.women.json';
import ColumnLayout from '@/applets/layout/column.layout';
import SearchInput from '@/applets/menu/search/search.input';
import ThemedText from '@/components/themed/themed.text';
import WebHead from '@/components/web.head';
import Web from '@/services/web';
import { LAYOUT } from '@/constants/styles/layout';

export default function SaintsScreen() {
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(searchText.trim().replace(/\s+/g, ' ').toLowerCase());
  };

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
          onPress={handleSearch}
          placeholder="Пошук імён"
        />

        {menNames.length > 0 && (
          <>
            <ThemedText type="link" style={style.heading}>Мужчынскія імёны</ThemedText>
            {menNames.map((name) =>
              <ThemedText key={name}>{LAYOUT.DOT + name}</ThemedText>)}
          </>
        )}

        {womenNames.length > 0 && (
          <>
            <ThemedText type="link" style={style.heading}>Жаночыя імёны</ThemedText>
            {womenNames.map((name) =>
              <ThemedText key={name}>{LAYOUT.DOT + name}</ThemedText>)}
          </>
        )}
      </ColumnLayout>
    </>
  );
}

const style = StyleSheet.create({
  heading: {
    textAlign: 'center',
    paddingVertical: 30,
  },
});
