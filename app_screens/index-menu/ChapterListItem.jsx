import { Link } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor.ts';
import ThemedText from '@/components/ThemedText';

import Menu from '@/functions/Menu';
import Page from '../../functions/Page';
import Styles from '@/constants/styles/common.styles';

export default function ChapterListItem({ chapter, keys }) {
  const contentUrl = Page.getUrl(keys);
  const chapterName = Menu.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const linkColor = useThemeColor({}, 'link');
  const textStyle = Menu.getColor(keys, linkColor);

  return (
    <Link href={contentUrl} style={linkStyle}>
      <ThemedText type='item' style={textStyle}>
        {chapterName}
      </ThemedText>
    </Link>
  );
}
