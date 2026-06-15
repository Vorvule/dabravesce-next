import ThemedText from '@/components/themed/themed.text';

export default function MenuFooter() {
  const style: any = { textAlign: 'center', paddingVertical: 40 };

  return (
    <ThemedText type="item" style={style}>
      Праект{'\n'}
      Брацтва Віленскіх мучанікаў{'\n'}
      Свята-Петра-Паўлаўскага сабора{'\n'}
      Беларускай Праваслаўнай{'\n'}
      Царквы
    </ThemedText>
  );
}
