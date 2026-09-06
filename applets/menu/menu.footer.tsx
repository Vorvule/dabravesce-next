import ThemedText from '@/components/themed/themed.text';
import MenuFooterLinks from './menu.footer.links';

export default function MenuFooter() {
  const style: any = { textAlign: 'center', paddingVertical: 40 };

  const footer = `Праект
Брацтва Віленскіх мучанікаў
Свята-Петра-Паўлаўскага сабора
Беларускай Праваслаўнай
Царквы`;

  return (
    <>
      <ThemedText type="item" style={style}>{ footer }</ThemedText>
      <MenuFooterLinks />
    </>
  );
}