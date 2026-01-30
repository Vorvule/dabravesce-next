import { PropsWithChildren, ReactElement, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset
} from 'react-native-reanimated';

import ThemedView from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import Device from '@/functions/Device';
import { GlobalContext } from '@/contexts/GlobalContext';

const HEADER_HEIGHT = 200;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
}>;

export default function ParallaxScrollView({ children, headerImage }: Props) {
  const windowIsWide = Device.windowIsWide();
  const width = windowIsWide ? 800 : '100%';

  const backgroundColor = useThemeColor({}, 'background');

  const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row' },
    middleColumn: { width },
    sideColumn: { flex: 1 },
    header: {
      height: HEADER_HEIGHT,
      overflow: 'hidden',
      backgroundColor,
    },
    content: {
      flex: 1,
      padding: 18,
      gap: 16,
      overflow: 'hidden',
      backgroundColor,
    },
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(scrollRef);

  const { keychain } = useContext(GlobalContext);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true })
  }, [keychain, scrollRef])

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

  const animatedViewStyle = [styles.header, headerAnimatedStyle];

  return (
    <ThemedView style={styles.container}>
      {windowIsWide && <ThemedView style={styles.sideColumn} />}
      <ThemedView style={styles.middleColumn}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={!windowIsWide}
        >
          <Animated.View style={animatedViewStyle}>{headerImage}</Animated.View>
          <ThemedView style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>
      {windowIsWide && <ThemedView style={styles.sideColumn} />}
    </ThemedView>
  );
}
