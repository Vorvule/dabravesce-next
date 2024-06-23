import ThemedText from "@/components/ThemedText";

import Styles from "@/constants/Styles";

export default function ChapterName({ children }) {
  const style = Styles.centered;

  return children.split(" | ").map((name, index) => {
    return (
      <ThemedText type="header" style={style} key={"chapter-" + index}>
        {name}
      </ThemedText>
    );
  });
}
