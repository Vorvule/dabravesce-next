import { ThemedText } from "@/components/ThemedText";

import { styles } from "@/constants/styles";

export default function ChapterName({ children }) {
  const style = styles.centered;

  return children.split(" | ").map((name, index) => {
    return (
      <ThemedText type="header" style={style} key={"chapter-" + index}>
        {name}
      </ThemedText>
    );
  });
}
