import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Device from '@/services/Device';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GlobalContext } from '@/contexts/GlobalContext';
import MenuPanel from '@/screens/panel/MenuPanel';
import CalendarPanel from '@/screens/panel/CalendarPanel';
import PageHeader from './PageHeader';
import ThemedView from '../themed/ThemedView';

type Props = PropsWithChildren<{ title: string, subtitle: string }>;

export default function PageScrollView({ children, title, subtitle }: Props) {
  const windowIsWide = Device.windowIsWide();
  const windowIsVeryWide = Device.windowIsVeryWide();
  const width = windowIsWide ? 800 : '100%';

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', justifyContent: windowIsVeryWide ? undefined : 'center' },
    middleColumn: { width },
    sideColumn: { flex: 1, overflow: 'hidden' },
    content: { flex: 1, padding: 18, paddingBottom: 160, gap: 16, overflow: 'hidden' },
  });

  const scrollRef = useRef<ScrollView>(null);
  const { keychain } = useContext(GlobalContext);
  const colorScheme = useColorScheme();

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [keychain, scrollRef]);

  return (
    <ThemedView style={styles.container}>
      {windowIsVeryWide && (
        <ThemedView style={styles.sideColumn}>
          <MenuPanel />
        </ThemedView>
      )}

      <ThemedView style={styles.middleColumn}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={!windowIsWide}>
          <PageHeader title={title} subtitle={subtitle} />
          <ThemedView key={colorScheme} style={styles.content}>{children}</ThemedView>
        </ScrollView>
      </ThemedView>

      {windowIsVeryWide && (
        <ThemedView style={styles.sideColumn}>
          <CalendarPanel />
        </ThemedView>
      )}
    </ThemedView>
  );
}
