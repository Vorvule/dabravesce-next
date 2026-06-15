import { Link } from 'expo-router';

import ThemedText from '@/components/themed/themed.text';

import { useThemeColor } from '@/hooks/use.theme.color';

export default function ChapterText({ chapterText }) {
  const tab = '       ';

  const linkTextStyle = {
    color: useThemeColor({}, 'link'),
    fontFamily: 'Vollkorn',
  };

  return chapterText.map((paragraph, index) => {
    // Todo: Move links (about Dabravesce) to the footer and simplify the code below
    return typeof paragraph === 'string' ? (
      <ThemedText key={'p-' + index}>{tab + paragraph}</ThemedText>
    ) : (
      <Link key={'l-' + index} href={paragraph[1]}>
        <ThemedText style={linkTextStyle}>{tab + paragraph[0]}</ThemedText>
      </Link>
    );
  });
}
