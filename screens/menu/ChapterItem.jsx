import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { ChainContext } from "@/contexts/ChainContext";
import { MenuService } from "@/service/MenuService";

import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

import { styles } from "@/constants/styles";

export default function ChapterItem({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);

    navigation.navigate("source", { chain: keys });
  };

  const href = keys.join("-");
  const style = [styles.menuItemBorder, styles.menuItemText];

  const color = MenuService.getStyling(keys);
  const text = MenuService.clear(chapter.name);

  return (
    <Link href={href} style={style}>
      <ThemedText style={color}>{text}</ThemedText>
    </Link>
  );
}
