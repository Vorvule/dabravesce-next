import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import { allAlbums } from "@/assets/albums/AllAlbums";
import AlbumList from "@/screens/menu/AlbumList";

import { Colors } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { Styles } from "@/constants/Styles";

export default function MenuScreen() {
  const source = useTheme().dark
    ? require("@/assets/images/logos/books-dark.png")
    : require("@/assets/images/logos/books.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={source} style={Styles.image} />}
    >
      <ThemedText type="title">Крыніцы</ThemedText>

      <ThemedText type="subtitle" style={Styles.centered}>Змест</ThemedText>

      <ThemedView>
        <AlbumList albums={allAlbums} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
