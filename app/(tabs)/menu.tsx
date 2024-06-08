import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import { allAlbums } from "@/assets/albums/AllAlbums";
import AlbumList from "@/screens/menu/AlbumList";

import { HeaderStyle, TopStyle as TopStyle } from "@/constants/TopStyles";

export default function MenuScreen() {
  const source = require("@/assets/images/logos/books.png");

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyle.backgroundColor}
      headerImage={<Image source={source} style={TopStyle.image} />}
    >
      <ThemedText type="title">Крыніцы</ThemedText>

      <ThemedView>
        <AlbumList albums={allAlbums} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
