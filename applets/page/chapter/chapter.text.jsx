import { Link } from 'expo-router';

import ThemedText from '@/components/themed/themed.text';

import { useThemeColor } from '@/hooks/use.theme.color';
import { LAYOUT } from '../../../constants/styles/layout.ts';

export default function ChapterText({ chapterText }) {
  const linkTextStyle = {
    color: useThemeColor({}, 'link'),
    fontFamily: 'Vollkorn',
  };

  return chapterText.map((paragraph, index) => {
    // Todo: Move links (about Dabravesce) to the footer and simplify the code below
    return typeof paragraph === 'string' ? (
      <ThemedText key={'p-' + index}>{LAYOUT.TAB + paragraph}</ThemedText>
    ) : (
      <Link key={'l-' + index} href={paragraph[1]}>
        <ThemedText style={linkTextStyle}>{LAYOUT.TAB + paragraph[0]}</ThemedText>
      </Link>
    );
  });
}
