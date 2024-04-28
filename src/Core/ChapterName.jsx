import ChapterHeader from "../components/basic/ChapterHeader";

export default function ChapterName({ children }) {
  return children.split(" | ").map((name, index) => {
    return <ChapterHeader key={"chapter-" + index}>{name}</ChapterHeader>;
  });
}
