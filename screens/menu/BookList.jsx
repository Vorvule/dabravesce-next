import { View } from "react-native";

import { styles } from "@/constants/styles";
import BookItem from "./BookItem";

export default function BookList({ books, keys, folding }) {
  return books.map((book, key) => {
    return (
      <View style={styles.menuPadding} key={"book-" + key}>
        <BookItem book={book} keys={[...keys, key]} folding={folding} />
      </View>
    );
  });
}
