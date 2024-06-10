import { View } from "react-native";
import ChapterItem from "./ChapterItem";
import { Styles } from "@/constants/Styles";

export default function ChapterList({ chapters, keys }) {
  return chapters.map((chapter, key) => {
    return (
      <View style={Styles.menuPadding} key={"chapter-" + key}>
        <ChapterItem chapter={chapter} keys={[...keys, key]} />
      </View>
    );
  });
}
