import { Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

import AppSources from "@/assets/albums/AppSources";
import AlbumList from "@/app_screens/sources/AlbumList";
import Device from "@/functions/Device";

import headerBackgroundColor from "@/constants/HeaderColors";
import Styles from "@/constants/Styles";

const dark = "@/assets/images/logos/books-dark.png";
const light = "@/assets/images/logos/books.png";

export default function MenuScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={imageSource} style={Styles.image} />}
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
