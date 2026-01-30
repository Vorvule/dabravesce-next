import ThemedText from '@/components/ThemedText';

export default function IndexFooter() {
  const style: any = { textAlign: 'center', paddingVertical: 40 };

  return (
    <ThemedText type='item' style={style}>
      Праект{'\n'}
      Брацтва Віленскіх мучанікаў{'\n'}
      Свята-Петра-Паўлаўскага сабора{'\n'}
      Беларускай Праваслаўнай{'\n'}
      Царквы
    </ThemedText>
  );
}
