import Text from "../components/basic/Text";

export default function ChapterText({ chapterText }) {
  return chapterText.map((name, index) => {
    return <Text key={"chapter-text-" + index}>{name}</Text>;
  });
}
