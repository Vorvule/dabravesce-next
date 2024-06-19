import { Link } from "expo-router";

import ThemedText from "@/components/ThemedText";
import MenuService from "@/service/MenuService";

import Styles from "@/constants/Styles";
import Content from "@/service/Content";

export default function ChapterListItem({ chapter, keys }) {
  const сontentUrl = Content.getContentUrl(keys);
  const chapterName = MenuService.clearText(chapter.name);
  
  const linkStyle = [Styles.border, Styles.padded];
  const textStyle = MenuService.getColor(keys);

  return (
    <Link href={сontentUrl} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
