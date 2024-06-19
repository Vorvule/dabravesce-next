import { Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

import AppSources from "@/assets/albums/AppSources";
import AlbumList from "@/screens/menu/AlbumList";

import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";

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
      <ThemedText type="title">Дабравесце</ThemedText>

      <ThemedText type="subtitle" style={Styles.centered}>
        Крыніцы
      </ThemedText>

      <ThemedView>
        <AlbumList albums={AppSources} />
      </ThemedView>
    </ParallaxScrollView>
  );
}
