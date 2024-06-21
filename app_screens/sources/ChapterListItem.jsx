import { Link } from "expo-router";

import Menu from "@/functions/Menu";
import ThemedText from "@/components/ThemedText";

import Content from "../../functions/Content";
import Styles from "@/constants/Styles";

export default function ChapterListItem({ chapter, keys }) {
  const сontentUrl = Content.getUrl(keys);
  const chapterName = Menu.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const textStyle = Menu.getColor(keys);

  return (
    <Link href={сontentUrl} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
