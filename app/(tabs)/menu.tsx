import { useMemo } from "react";
import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";

import { ThemedText } from "@/components/ThemedText";
import { allAlbums } from "@/assets/albums/AllAlbums";
import AlbumList from "@/screens/menu/AlbumList";

import { HeaderStyles, ImageStyles } from "@/constants/TopStyles";

export default function HomeScreen() {
  const imageUrl = "@/assets/images/logos/books.png";
  const imageSource = useMemo(() => require(imageUrl), [imageUrl]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={HeaderStyles.backgroundColor}
      headerImage={
        <Image source={imageSource} style={ImageStyles.headerImage} />
      }
    >
      <ThemedText type="title">Крыніцы</ThemedText>

      <ThemedView>
        <AlbumList albums={allAlbums} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
