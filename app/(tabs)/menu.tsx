import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import { allAlbums } from "@/assets/albums/AllAlbums";
import AlbumList from "@/screens/menu/AlbumList";

import { headerBackgroundColor } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";
import { Styles } from "@/constants/Styles";

const dark = "@/assets/images/logos/books-dark.png";
const light = "@/assets/images/logos/books.png";

export default function MenuScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={
        <Image
          source={useTheme().dark ? require(dark) : require(light)}
          style={Styles.image}
        />
      }
    >
      <ThemedText type="title">Крыніцы</ThemedText>

      <ThemedText type="subtitle" style={Styles.centered}>
        Змест
      </ThemedText>

      <ThemedView>
        <AlbumList albums={allAlbums} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
