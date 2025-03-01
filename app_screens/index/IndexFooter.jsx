import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

import Styles from '@/constants/styles/common.styles';

export default function IndexFooter() {
  return (
    <ThemedView style={{ paddingBottom: 40 }}>
      <ThemedText type='link' style={{ textAlign: 'center' }}>
        Праект
      </ThemedText>
      <ThemedText type='link' style={Styles.centered}>
        Брацтва Віленскіх мучанікаў
      </ThemedText>
      <ThemedText type='link' style={Styles.centered}>
        Свята-Петра-Паўлаўскага сабора
      </ThemedText>
      <ThemedText type='link' style={Styles.centered}>
        Беларускай Праваслаўнай
      </ThemedText>
      <ThemedText type='link' style={Styles.centered}>
        Царквы
      </ThemedText>
    </ThemedView>
  );
}
