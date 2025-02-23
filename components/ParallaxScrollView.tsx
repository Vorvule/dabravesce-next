import {
  useContext,
  useMemo,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { StyleSheet } from 'react-native';

import Animated, {
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import Device from '@/functions/Device';
import { ColorTheme } from '@/functions/ColorTheme';
import { GlobalContext } from '@/contexts/GlobalContext';
import ThemedView from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

const HEADER_HEIGHT = 200;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function ParallaxScrollView({ children, headerImage }: Props) {
  const windowIsWide = Device.windowIsWide();
  const width = windowIsWide ? 800 : Device.getWindowWidth();

  const backgroundColor = ColorTheme.getColor('background');

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row' },
    middleColumn: { width },
    sideColumn: { flex: 1 },
    header: {
      height: HEADER_HEIGHT,
      overflow: 'hidden',
      backgroundColor: backgroundColor,
    },
    content: { flex: 1, padding: 18, gap: 16, overflow: 'hidden' },
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

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

  const AnimatedViewStyle = [styles.header, headerAnimatedStyle];

  const { keychain } = useContext(GlobalContext);
  useMemo(() => scrollTo(scrollRef, 0, 0, true), [keychain]);

  return (
    <ThemedView style={styles.container}>
      {windowIsWide && <ThemedView style={styles.sideColumn} />}
      <ThemedView style={styles.middleColumn}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          scrollIndicatorInsets={{ bottom }}
          contentContainerStyle={{ paddingBottom: bottom }}
          // showsVerticalScrollIndicator={!windowIsWide}
        >
          <Animated.View style={AnimatedViewStyle}>{headerImage}</Animated.View>
          <ThemedView style={styles.content}>{children}</ThemedView>
          <ThemedView style={{ height: 300 }} />
        </Animated.ScrollView>
      </ThemedView>
      {windowIsWide && <ThemedView style={styles.sideColumn} />}
    </ThemedView>
  );
}
