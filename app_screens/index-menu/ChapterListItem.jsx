import { Link } from 'expo-router';

import { useThemeColor } from '@/hooks/useThemeColor.ts';
import ThemedText from '@/components/ThemedText';

import { useContext } from 'react';
import { GlobalContext } from '@/contexts/GlobalContext.ts';

import Menu from '@/functions/Menu';
import Page from '../../functions/Page';
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
      <ThemedText type='item' style={textStyle}>
        {chapterName}
      </ThemedText>
    </Link>
  );
}
