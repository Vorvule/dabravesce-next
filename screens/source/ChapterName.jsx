import { ThemedText } from "@/components/ThemedText";

import { styles } from "@/constants/styles";

export default function ChapterName({ children }) {
  return children.split(" | ").map((name, index) => {
    return (
      <ThemedText
        style={styles.centered}
        key={"chapter-" + index}
        type="semiBold"
      >
        {name}
      </ThemedText>
    );
  });
}
