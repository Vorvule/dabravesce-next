import ThemedView from '@/components/themed/themed.view';

import ChapterName from './chapter/chapter.name.jsx';
import ChapterAudio from './chapter/chapter.audio.jsx';
import ChapterText from './chapter/chapter.text.jsx';

import ChapterNavigation from './chapter/chapter.navigation.tsx';

import Styles from '@/constants/styles/common.styles';

export default function PageView({ chapter, keychain }) {
  return (
    <ThemedView style={Styles.gapped}>
      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterName>{chapter.name}</ChapterName>
      <ChapterText chapterText={chapter.text} />

      <ChapterNavigation keychain={keychain} />
    </ThemedView>
  );
}
