import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedText from '@/components/themed/themed.text';
import { ExternalLink } from '@/components/external.link';

export default function MenuFooter() {
  const style: any = { textAlign: 'center', paddingVertical: 40 };
  const linkColor = useThemeColor({}, 'link');

  const footer = `Праект
Брацтва Віленскіх мучанікаў
Свята-Петра-Паўлаўскага сабора
Беларускай Праваслаўнай
Царквы`;

  return (
    <View>
      <ThemedText type="item" style={style}>{ footer }</ThemedText>
      <ExternalLink href="https://www.youtube.com/@Dabravesce" style={styles.link}>
        <Pressable style={styles.button}>
          <Ionicons name="logo-youtube" size={28} color="#FF0000" />
          <ThemedText type="link" style={{ color: linkColor }}>Наш канал</ThemedText>
        </Pressable>
      </ExternalLink>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
