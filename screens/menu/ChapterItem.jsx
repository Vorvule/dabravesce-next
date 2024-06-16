import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { MenuService } from "@/service/MenuService";

import { Styles } from "@/constants/Styles";
import Content from "@/service/Content";

export default function ChapterItem({ chapter, keys }) {
  const contentUrl = Content.getContentUrl(keys);
  const linkStyle = [Styles.border, Styles.padded];

  const textStyle = MenuService.getColor(keys);
  const chapterName = MenuService.clearText(chapter.name);

  return (
    <Link href={contentUrl} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
