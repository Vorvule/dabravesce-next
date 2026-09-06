import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedText from '@/components/themed/themed.text';
import { ExternalLink } from '@/components/external.link';

const PLAY_MARKET_URL = 'https://play.google.com/store/apps/details?id=by.dabravesce';

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
          <ThemedText type="link" style={{ color: linkColor }}>УТ-канал</ThemedText>
        </Pressable>
      </ExternalLink>
      <View style={styles.links}>
        {Platform.OS === 'android' ? (
          <ExternalLink href="https://dabravesce.by" style={styles.link}>
            <Pressable style={styles.button}>
              <Ionicons name="link" size={28} color="#1E90FF" />
              <ThemedText type="link" style={{ color: linkColor }}>Веб-сайт</ThemedText>
            </Pressable>
          </ExternalLink>
        ) : (
          <ExternalLink href={PLAY_MARKET_URL} style={styles.link}>
            <Pressable style={styles.button}>
              <FontAwesome5 name="google-play" size={28} color="#00C853" />
              <ThemedText type="link" style={{ color: linkColor }}>Дачыненне</ThemedText>
            </Pressable>
          </ExternalLink>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  links: {
    alignItems: 'center',
    gap: 14,
    marginTop: 14,
  },
  link: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
