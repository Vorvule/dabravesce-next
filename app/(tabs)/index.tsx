import { Image } from "react-native";
import { useTheme } from "@react-navigation/native";

import { IndexContent } from "@/screens/index/IndexContent";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Colors } from "@/constants/Colors";
import { Styles } from "@/constants/Styles";

export default function IndexScreen() {
  const source = useTheme().dark
    ? require("@/assets/images/logos/church-dark.png")
    : require("@/assets/images/logos/church.png");

  const headerBackgroundColor = {
    dark: Colors.dark.background,
    light: Colors.light.background,
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={headerBackgroundColor}
      headerImage={<Image source={source} style={Styles.image} />}
    >
      <IndexContent />
    </ParallaxScrollView>
  );
}
