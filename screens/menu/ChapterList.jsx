import { View } from "react-native";
import ChapterListItem from "./ChapterListItem";
import Styles from "@/constants/Styles";

export default function ChapterList({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={Styles.menuPadding} key={"chapter-" + key}>
        <ChapterListItem chapter={chapter} keys={[...keys, key]} />
      </View>
    );
  });
}
