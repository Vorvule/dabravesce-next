import {
  useContext,
  useMemo,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { StyleSheet, useColorScheme } from "react-native";

import Animated, {
  interpolate,
  scrollTo,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import ThemedView from "@/components/ThemedView";
import Device from "@/functions/Device";
import GlobalContext from "@/contexts/GlobalContext";

const HEADER_HEIGHT = 200;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const viewColor = { backgroundColor: headerBackgroundColor[colorScheme] };
  const viewStyle = [styles.header, viewColor, headerAnimatedStyle];

  const { keychain }: { keychain: number[] } = useContext(GlobalContext);
  useMemo(() => scrollTo(scrollRef, 0, 0, true), [keychain]);

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={!Device.wideScreen()}
      >
        <Animated.View style={viewStyle}>{headerImage}</Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 800,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 24, // 32
    gap: 16,
    overflow: "hidden",
  },
});
