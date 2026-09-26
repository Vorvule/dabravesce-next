import { ReactElement, useMemo } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';

import ThemedText from '@/components/themed/themed.text';
import { LAYOUT } from '@/constants/styles/layout';

type Props = {
  menNames: string[],
  womenNames: string[],
  header?: ReactElement,
};

export default function SaintNames({ menNames, womenNames, header }: Props) {
  const sections = useMemo(
    () => [
      { title: 'Мужчынскія імёны', data: menNames },
      { title: 'Жаночыя імёны', data: womenNames },
    ].filter((section) => section.data.length > 0),
    [menNames, womenNames],
  );

  return (
    <SectionList
      style={styles.list}
      sections={sections}
      keyExtractor={(name) => name}
      ListHeaderComponent={header}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section }) =>
        <ThemedText type="link" style={styles.heading}>{ section.title }</ThemedText>}
      renderItem={({ item }) => <ThemedText>{LAYOUT.TAB + item}</ThemedText>}
      ItemSeparatorComponent={Separator}
    />
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    paddingVertical: 30,
  },
  separator: {
    height: 8,
  },
});
