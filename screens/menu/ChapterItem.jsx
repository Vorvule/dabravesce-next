import { useContext } from "react";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ChainContext } from "@/contexts/ChainContext";
import { MenuService } from "@/service/MenuService";

import { Styles } from "@/constants/Styles";

export default function ChapterItem({ chapter, keys }) {
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);
  };

  const href = keys.join("-");
  const style = [Styles.border, Styles.padded];

  const color = MenuService.getColorStyle(keys);
  const text = MenuService.clearText(chapter.name);

  return (
    <Link href={href} style={style} onPress={onPress}>
      <ThemedText style={color}>{text}</ThemedText>
    </Link>
  );
}
