import { Link } from 'expo-router';

import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedText from '@/components/themed/themed.text';

import { useContext } from 'react';
import { GlobalContext } from '@/contexts/global.context';

import Menu from '@/services/menu';
import Page from '@/services/page.ts';
import Styles from '@/constants/styles/common.styles';

export default function ChapterListItem({ chapter, keys }) {
  const contentUrl = Page.getUrl(keys);
  const chapterName = Menu.clearText(chapter.name);

  const linkStyle = [Styles.border, Styles.padded];
  const textColor = useThemeColor({}, 'link');
  const { keychain } = useContext(GlobalContext);
  const textStyle = Menu.getColor(keychain, keys, textColor);

  return (
    <Link href={contentUrl} style={linkStyle}>
      <ThemedText type="item" style={textStyle}>
        {chapterName}
      </ThemedText>
    </Link>
  );
}
