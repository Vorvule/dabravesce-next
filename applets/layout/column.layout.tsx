import { PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { Platform, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';

import { SCREEN_WIDTH_LIMIT } from '@/constants/breakpoints';
import { useColorScheme } from '@/hooks/use.color.scheme';
import { GlobalContext } from '@/contexts/global.context';
import LeftColumn from './left.column';
import RightColumn from './right.column';
import ColumnHeader from './column.header';
import ThemedView from '../../components/themed/themed.view';

type Props = PropsWithChildren<{ title: string, subtitle: string }>;

export default function ColumnLayout({ children, title, subtitle }: Props) {
  const { width: windowWidth } = useWindowDimensions();
  const ssrWidth = Platform.OS === 'web' && typeof window !== 'undefined' ? window.innerWidth : 0;
  const width = ssrWidth > windowWidth ? ssrWidth : windowWidth;
  const windowIsMiddle = width > SCREEN_WIDTH_LIMIT.NARROW;
  const windowIsWide = width > SCREEN_WIDTH_LIMIT.WIDE;
  const columnWidth = windowIsMiddle ? SCREEN_WIDTH_LIMIT.NARROW : '100%';

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', justifyContent: windowIsWide ? undefined : 'center' },
    middleColumn: { width: columnWidth },
    sideColumn: { flex: 1, overflow: 'hidden' },
    content: { flex: 1, padding: 18, paddingBottom: 160, overflow: 'hidden' },
  });

  const scrollRef = useRef<ScrollView>(null);
  const { keychain } = useContext(GlobalContext);
  const colorScheme = useColorScheme();

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [keychain, scrollRef]);

  return (
    <ThemedView style={styles.container}>
      {windowIsWide && (
        <ThemedView style={styles.sideColumn}>
          <LeftColumn />
        </ThemedView>
      )}

      <ThemedView style={styles.middleColumn}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={!windowIsMiddle}>
          <ColumnHeader title={title} subtitle={subtitle} />
          <ThemedView key={colorScheme} style={styles.content}>{children}</ThemedView>
        </ScrollView>
      </ThemedView>

      {windowIsWide && (
        <ThemedView style={styles.sideColumn}>
          <RightColumn />
        </ThemedView>
      )}
    </ThemedView>
  );
}
