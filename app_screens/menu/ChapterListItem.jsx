import { Link } from "expo-router";

import Menu from "@/functions/Menu";
import ThemedText from "@/components/ThemedText";

import Page from "../../functions/Page";
import Styles from "@/constants/Styles";

export default function ChapterListItem({ chapter, keys }) {
  const сontentUrl = Page.getUrl(keys);
  const chapterName = Menu.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const textStyle = Menu.getColor(keys);

  return (
    <Link href={сontentUrl} style={linkStyle}>
      <ThemedText style={textStyle}>{chapterName}</ThemedText>
    </Link>
  );
}
