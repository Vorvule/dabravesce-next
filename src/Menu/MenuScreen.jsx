import { createContext } from "react";
import { Image, useColorScheme } from "react-native";

import Albums from "./Albums";
import Screen from "../components/Screen";

import { allAlbums } from "../../assets/albums/AllAlbums";
import { DeviceData } from "../service/DeviceData";

const NavigationContext = createContext();

export function MenuScreen({ navigation }) {
  const logoSource =
    useColorScheme() == "light"
      ? require("../../assets/images/banner/dabravesce-banner.png")
      : require("../../assets/images/banner/dabravesce-banner-dark.png");

  return (
    <NavigationContext.Provider value={navigation}>
      <Screen>
        <Image source={logoSource} style={DeviceData.logoStyle()} />

        <Albums albums={allAlbums} />
      </Screen>
    </NavigationContext.Provider>
  );
}
