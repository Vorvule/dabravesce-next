import { useMemo } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import CoreContent from "@/screens/source/CoreContent";
import { CorePage } from "@/service/CorePage";

export default function TabTwoScreen() {
  const urlChain = useLocalSearchParams().source;
  const routeChain = CorePage.getRouteChain(urlChain);

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContents(routeChain),
    [routeChain]
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.image} />
      }
    >
      <CoreContent
        albumName={albumName}
        bookName={bookName}
        chapter={chapter}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
});
