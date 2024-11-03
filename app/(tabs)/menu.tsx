import { Image } from "react-native";
import { usePathname } from "expo-router";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

import AppSources from "@/assets/albums/AppSources";
import AlbumList from "@/app_screens/menu/AlbumList";
import Device from "@/functions/Device";
import MetaData from "@/components/MetaData";

import Styles from "@/constants/Styles";

const dark = "@/assets/images/logos/books-dark.png";
const light = "@/assets/images/logos/books.png";

export default function MenuScreen() {
  const imageSource = Device.themeIsDark() ? require(dark) : require(light);
  const headerImage = <Image source={imageSource} style={Styles.image} />;

  const path: string = usePathname();

  return (
    <>
      <MetaData path={path} />

      <ParallaxScrollView headerImage={headerImage}>
        <ThemedText type="title">Дабравесце</ThemedText>
        <ThemedText style={[Styles.centered, { fontSize: 22 }]}>
          Крыніцы
        </ThemedText>

        <ThemedView>
          <AlbumList albums={AppSources} />
        </ThemedView>
      </ParallaxScrollView>
    </>
  );
}
