import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

import ChapterName from "./ChapterName";
import ChapterAudio from "./ChapterAudio";
import ChapterText from "./ChapterText";

import { styles } from "@/constants/styles";

export default function SourceContent({ albumName, bookName, chapter }) {
  return (
    <ThemedView style={styles.gapped}>
      <ThemedText style={styles.centered} type="title">
        {albumName}
      </ThemedText>

      <ThemedText style={styles.centered} type="subtitle">
        {bookName}
      </ThemedText>

      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}

      <ChapterName>{chapter.name}</ChapterName>

      <ChapterText chapterText={chapter.text} />
    </ThemedView>
  );
}
