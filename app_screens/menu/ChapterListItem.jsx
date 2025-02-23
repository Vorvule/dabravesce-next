import { Link } from 'expo-router';

import Menu from '@/functions/Menu';
import Page from '../../functions/Page';
import Styles from '@/constants/styles/common.styles';
import ThemedText from '@/components/ThemedText';

export default function ChapterListItem({ chapter, keys }) {
  const contentUrl = Page.getUrl(keys);
  const chapterName = Menu.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const textStyle = Menu.getColor(keys);

  return (
    <Link href={contentUrl} style={linkStyle}>
      <ThemedText type='link' style={textStyle}>
        {chapterName}
      </ThemedText>
    </Link>
  );
}
