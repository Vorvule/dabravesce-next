import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { Platform, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';

import { VERY_WIDE } from '@/constants/breakpoints';
import { useColorScheme } from '@/hooks/use.color.scheme';
import { GlobalContext } from '@/contexts/global.context';
import MenuPanel from '@/screens/panel/menu.panel';
import CalendarPanel from '@/screens/panel/calendar.panel';
import PageHeader from './page.header';
import ThemedView from '../themed/themed.view';

type Props = PropsWithChildren<{ title: string, subtitle: string }>;

export default function PageScrollView({ children, title, subtitle }: Props) {
  const { width: windowWidth } = useWindowDimensions();
  const ssrWidth = Platform.OS === 'web' && typeof window !== 'undefined' ? window.innerWidth : 0;
  const width = ssrWidth > windowWidth ? ssrWidth : windowWidth;
  const windowIsWide = width > 800;
  const windowIsVeryWide = width > VERY_WIDE;
  const columnWidth = windowIsWide ? 800 : '100%';

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', justifyContent: windowIsVeryWide ? undefined : 'center' },
    middleColumn: { width: columnWidth },
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
