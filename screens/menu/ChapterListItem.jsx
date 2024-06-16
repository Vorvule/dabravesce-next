import { Link } from "expo-router";

import ThemedText from "@/components/ThemedText";
import MenuService from "@/service/MenuService";

import Styles from "@/constants/Styles";
import Content from "@/service/Content";

export default function ChapterListItem({ chapter, keys }) {
  const linkContentUrl = Content.getContentUrl(keys);
  const linkStyle = [Styles.border, Styles.padded];

  const linkTextStyle = MenuService.getColor(keys);
  const chapterName = MenuService.clearText(chapter.name);

  return (
    <Link href={linkContentUrl} style={linkStyle}>
      <ThemedText style={linkTextStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
