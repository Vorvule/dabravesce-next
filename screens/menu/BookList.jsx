import { View } from "react-native";

import { Styles } from "@/constants/Styles";
import BookItem from "./BookItem";

export default function BookList({ books, keys, folding }) {
  return books.map((book, key) => {
    return (
      <View style={Styles.menuPadding} key={"book-" + key}>
        <BookItem book={book} keys={[...keys, key]} folding={folding} />
      </View>
    );
  });
}
