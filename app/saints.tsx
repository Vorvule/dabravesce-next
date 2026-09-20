import { StyleSheet } from 'react-native';
import saintNamesMen from '@/assets/saints/saint.names.men.json';
import saintNamesWomen from '@/assets/saints/saint.names.women.json';
import ColumnLayout from '@/applets/layout/column.layout';
import ThemedText from '@/components/themed/themed.text';
import WebHead from '@/components/web.head';
import Web from '@/services/web';
import { LAYOUT } from '../constants/styles/layout';

export default function SaintsScreen() {
  return (
    <>
      <WebHead name="Звод імёнаў Святых" description={Web.getDescription('/saints')} />

      <ColumnLayout title="Звод" subtitle="Імёнаў Святых">
        <ThemedText type="link" style={style.men}>Мужчынскія імёны</ThemedText>
        {saintNamesMen.map((name) =>
          <ThemedText key={name}>{LAYOUT.DOT + name}</ThemedText>)}

        <ThemedText type="link" style={style.women}>Жаночыя імёны</ThemedText>
        {saintNamesWomen.map((name) =>
          <ThemedText key={name}>{LAYOUT.DOT + name}</ThemedText>)}
      </ColumnLayout>
    </>
  );
}

const style = StyleSheet.create({
  men: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  women: {
    textAlign: 'center',
    paddingVertical: 30,
  },
});
