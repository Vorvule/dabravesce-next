import * as React from "react";
import { View } from "react-native";

import { styles } from "../constants/styles";

import ChapterAudio from "./ChapterAudio";
import ChapterName from "./ChapterName";
import ChapterText from "./ChapterText";

import AlbumHeader from "../components/basic/AlbumHeader";
import BookHeader from "../components/basic/BookHeader";

export default function CoreContent({ albumName, bookName, chapter }) {
  return (
    <View style={styles.screenContent}>
      <AlbumHeader>{albumName}</AlbumHeader>
      <BookHeader>{bookName}</BookHeader>
      <ChapterName>{chapter.name}</ChapterName>
      {chapter.audio && <ChapterAudio chapterAudio={chapter.audio} />}
      <ChapterText chapterText={chapter.text} />
    </View>
  );
}
