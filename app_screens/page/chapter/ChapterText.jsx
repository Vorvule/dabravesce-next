import ThemedText from '@/components/ThemedText';

export default function ChapterText({ chapterText }) {
  const tab = '       ';

  return chapterText.map((paragraph, index) => {
    return <ThemedText key={'para-' + index}>{tab + paragraph}</ThemedText>;
  });
}
