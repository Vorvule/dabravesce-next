import { PropsWithChildren, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollOffset } from 'react-native-reanimated';

import ThemedView from '@/components/ThemedView';
import Device from '@/functions/Device';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GlobalContext } from '@/contexts/GlobalContext';
import ParallaxHeader from './ParallaxHeader';

const HEADER_HEIGHT = 140;

type Props = PropsWithChildren<{ title: string, subtitle: string }>;

export default function ParallaxScrollView({ children, title, subtitle }:Props) {
  const windowIsWide = Device.windowIsWide();
  const width = windowIsWide ? 800 : '100%';

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row' },
    middleColumn: { width },
    sideColumn: { flex: 1 },
    content: { flex: 1, padding: 18, gap: 16, overflow: 'hidden' },
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const { keychain } = useContext(GlobalContext);
  const colorScheme = useColorScheme();

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, [keychain, scrollRef]);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      {windowIsWide && <ThemedView style={styles.sideColumn} />}

      <ThemedView style={styles.middleColumn}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={!windowIsWide}
        >
          <Animated.View style={headerAnimatedStyle}>
            <ParallaxHeader title={title} subtitle={subtitle} />
          </Animated.View>

          <ThemedView key={colorScheme} style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>

      {windowIsWide && <ThemedView style={styles.sideColumn} />}
    </ThemedView>
  );
}
