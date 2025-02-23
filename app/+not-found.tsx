import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'На жаль!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type='title' style={{ paddingBottom: 20 }}>
          Не знайшлі старонку!
        </ThemedText>
        <ThemedText type='subtitle' style={{ color: 'grey' }}>
          Прапануем вам
        </ThemedText>
        <Link href='/' style={styles.link}>
          <ThemedText type='link' style={{ fontSize: 30 }}>
            Галоўную
          </ThemedText>
        </Link>
        <ThemedText type='subtitle' style={{ color: 'grey' }}>
          альбо
        </ThemedText>
        <Link href='/' style={styles.link}>
          <ThemedText type='link' style={{ fontSize: 30 }}>
            Евангелле дня
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
