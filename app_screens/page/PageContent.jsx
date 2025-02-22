import { useMemo } from 'react';

import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

import ChapterName from './chapter/ChapterName';
import ChapterAudio from './chapter/ChapterAudio';
import ChapterText from './chapter/ChaptertText';

import Page from '@/functions/Page';
import ChapterNavigation from './chapter/ChapterNavigation';

import Styles from '@/constants/styles/common.styles';

export default function PageContent({ keychain }) {
  const { albumName, bookName, chapter } = useMemo(
    () => Page.getContent(keychain),
    [keychain],
  );

  return (
    <ThemedView style={Styles.gapped}>
      <ThemedText style={Styles.centered} type='title'>
        {albumName}
      </ThemedText>

      <ThemedText style={Styles.centered} type='subtitle'>
        {bookName}
      </ThemedText>

      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterName>{chapter.name}</ChapterName>
      <ChapterText chapterText={chapter.text} />

      <ChapterNavigation keychain={keychain} />
    </ThemedView>
  );
}
