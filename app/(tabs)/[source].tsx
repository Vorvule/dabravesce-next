import { useMemo } from "react";
import { Image, Platform, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import CoreContent from "@/screens/source/CoreContent";
import { CorePage } from "@/service/CorePage";
import { DeviceData } from "@/service/DeviceData";

export default function TabTwoScreen() {
  const urlChain = useLocalSearchParams().source;
  const routeChain = CorePage.getRouteChain(urlChain);

  const { albumName, bookName, chapter } = useMemo(
    () => CorePage.getContents(routeChain),
    [routeChain]
  );

  const colors = { light: "#F2F2F2", dark: "#000000" }; // A1CEDC 1D3D47 FCFAEB
  const source = "@/assets/images/logos/malpodkniga_.png";

  return (
    <ParallaxScrollView
      headerBackgroundColor={colors}
      headerImage={<Image source={require(source)} style={styles.image} />}
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
    height: 250,
    // width:500 , // DeviceData.getWidth(),
    resizeMode: "contain", // Platform.OS === "web" ? "cover" : 
    // bottom: 0,
    // right: 0,
    // position: "absolute",
    alignSelf: "center",
  },
});
