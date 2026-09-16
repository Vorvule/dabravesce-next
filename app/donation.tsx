import Web from '@/services/web';
import WebHead from '@/components/web.head';
import ColumnLayout from '@/applets/layout/column.layout';
import ThemedView from '@/components/themed/themed.view';
import Styles from '@/constants/styles/common.styles';
import ThemedText from '../components/themed/themed.text';
import { LAYOUT } from '../constants/styles/layout';

export default function DonationScreen() {
  const paragraph1 = 'Пры мажлівасці і жаданні падтрымаць дзейнасць Брацтва ' +
    'ў гонар святых Віленскіх мучанікаў Антонія, Іаана і Яўстафія вы можаце здзейсніць ' +
    'ахвяраванне паводле наступных рэквізітаў:';

  const paragraph2 = 'Без камісіі плацёж можна здзейсніць у ОАО «АСБ Беларусбанк». ' +
    'Іншыя банкі могуць узяць за перавод нязначную камісію.';

  const paragraph3 = 'Шчыра будзем удзячны вам і за найменшую лепту.';

  return (
    <>
      <WebHead name="Ахвяраванне" description={Web.getDescription('/donation')} />

      <ColumnLayout title="Ахвяраванне" subtitle="На дзейнасць Брацтва">
        <ThemedView style={Styles.paragraph}>
          <ThemedText>{ LAYOUT.TAB + paragraph1 }</ThemedText>
          <ThemedText> ●  УНП: 100 184 122</ThemedText>
          <ThemedText> ●  Нумар рахунка ў фармаце IBAN: BY08 AKBB 3015 0000 0232 1000 0000</ThemedText>
          <ThemedText> ●  Банк-атрымальнік: ОАО «АСБ Беларусбанк»</ThemedText>
          <ThemedText> ●  Код банка (БІК): AKBBBY2X</ThemedText>
          <ThemedText> ●  Лічбавы код банка: 795</ThemedText>
          <ThemedText> ●  Атрымальнік: Праваслаўнае Брацтва ў гонар Віленскіх мучанікаў Антонія, Іаана і Яўстафія ў г. Мінску</ThemedText>
          <ThemedText> ●  Код плацяжу: 44201 (альбо 144201) — Бязвыплатная (спонсарская) дапамога, дабравольныя ўзносы</ThemedText>
          <ThemedText> ●  Прызначэнне плацяжу: Дабравольныя ахвяраванні</ThemedText>
          <ThemedText>{ LAYOUT.TAB + paragraph2 }</ThemedText>
          <ThemedText>{ LAYOUT.TAB + paragraph3 }</ThemedText>
        </ThemedView>
      </ColumnLayout>
    </>
  );
}
