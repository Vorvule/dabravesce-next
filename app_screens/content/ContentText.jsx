import ThemedText from "@/components/ThemedText";

export default function ChapterText({ chapterText }) {
  return chapterText.map((name, index) => {
    return <ThemedText key={"chapter-text-" + index}>{name}</ThemedText>;
  });
}
