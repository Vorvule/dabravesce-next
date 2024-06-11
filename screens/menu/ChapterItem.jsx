import { useContext } from "react";
import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ChainContext } from "@/contexts/ChainContext";
import { MenuService } from "@/service/MenuService";

import { Styles } from "@/constants/Styles";

export default function ChapterItem({ chapter, keys }) {
  const chainContext = useContext(ChainContext);

  const href = "content/" + keys.join("-");
  const linkStyle = [Styles.border, Styles.padded];
  const onPress = () => chainContext.setChain(keys);

  const textStyle = MenuService.getColor(keys);
  const chapterName = MenuService.clearText(chapter.name);

  return (
    <Link push href={href} style={linkStyle} onPress={onPress}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
