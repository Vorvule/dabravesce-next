import { View } from "react-native";
import ChapterItem from "./ChapterItem";
import { styles } from "@/constants/styles";

export default function ChapterList({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={styles.menuPadding} key={"chapter-" + key}>
        <ChapterItem chapter={chapter} keys={[...keys, key]} />
      </View>
    );
  });
}
