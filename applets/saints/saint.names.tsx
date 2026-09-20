import { StyleSheet } from 'react-native';

import ThemedText from '@/components/themed/themed.text';
import ThemedView from '@/components/themed/themed.view';
import { LAYOUT } from '@/constants/styles/layout';

export default function SaintNames({
  title,
  names,
}: {
  title: string;
  names: string[];
}) {
  if (names.length === 0) {
    return null;
  }

  return (
    <>
      <ThemedText type="link" style={style.heading}>{ title }</ThemedText>
      <ThemedView style={style.names}>
        {names.map((name) =>
          <ThemedText key={name}>{LAYOUT.TAB + name}</ThemedText>)}
      </ThemedView>
    </>
  );
}

const style = StyleSheet.create({
  heading: {
    textAlign: 'center',
    paddingVertical: 30,
  },
  names: {
    gap: 8,
  },
});
