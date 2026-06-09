import ThemedView from '@/components/themed/ThemedView';

import ChapterName from './chapter/ChapterName';
import ChapterAudio from './chapter/ChapterAudio';
import ChapterText from './chapter/ChapterText';

import ChapterNavigation from './chapter/ChapterNavigation';

import Styles from '../../constants/styles/common.styles';

export default function PageContent({ chapter, keychain }) {
  return (
    <ThemedView style={Styles.gapped}>
      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterName>{chapter.name}</ChapterName>
      <ChapterText chapterText={chapter.text} />

      <ChapterNavigation keychain={keychain} />
    </ThemedView>
  );
}
