import { Link } from 'expo-router';

import ThemedText from '@/components/ThemedText';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function ChapterText({ chapterText }) {
  const tab = '       ';

  const linkTextStyle = {
    color: useThemeColor({}, 'link'),
    fontFamily: 'Vollkorn',
  };

  return chapterText.map((paragraph, index) => {
    // Todo: do we use Link inside?
    return typeof paragraph === 'string' ? (
      <ThemedText key={'p-' + index}>{tab + paragraph}</ThemedText>
    ) : (
      <Link key={'l-' + index} href={paragraph[1]}>
        <ThemedText style={linkTextStyle}>{tab + paragraph[0]}</ThemedText>
      </Link>
    );
  });
}
