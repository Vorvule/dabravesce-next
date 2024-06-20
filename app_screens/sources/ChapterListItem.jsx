import { Link } from "expo-router";

import MenuService from "@/functions/MenuService";
import ThemedText from "@/components/ThemedText";

import ContentService from "../../functions/ContentService";
import Styles from "@/constants/Styles";

export default function ChapterListItem({ chapter, keys }) {
  const сontentUrl = ContentService.getUrl(keys);
  const chapterName = MenuService.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const textStyle = MenuService.getColor(keys);

  return (
    <Link href={сontentUrl} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
