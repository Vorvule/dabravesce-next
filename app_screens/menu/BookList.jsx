import { View } from 'react-native';

import Styles from '@/constants/styles/common.styles';
import BookListItem from './BookListItem';

export default function BookList({ books, keys, folding }) {
  return books.map((book, key) => {
    return (
      <View style={Styles.menuPadding} key={'book-' + key}>
        <BookListItem book={book} keys={[...keys, key]} folding={folding} />
      </View>
    );
  });
}
