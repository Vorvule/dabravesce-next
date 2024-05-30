import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";

import AlbumList from "@/screens/menu/AlbumList";
import { allAlbums } from "@/assets/albums/AllAlbums";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const source = "@/assets/images/partial-react-logo.png";

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={require(source)} style={styles.image} />}
    >
      <ThemedText type="title">Крыніцы</ThemedText>

      <ThemedView>
        <AlbumList albums={allAlbums} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    // alignSelf: "center"
  },
});
