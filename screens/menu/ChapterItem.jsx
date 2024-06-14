import { Link } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { MenuService } from "@/service/MenuService";

import { Styles } from "@/constants/Styles";

export default function ChapterItem({ chapter, keys }) {
  const href = "content/" + keys.join("-");
  const linkStyle = [Styles.border, Styles.padded];

  const textStyle = MenuService.getColor(keys);
  const chapterName = MenuService.clearText(chapter.name);

  return (
    <Link href={href} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
