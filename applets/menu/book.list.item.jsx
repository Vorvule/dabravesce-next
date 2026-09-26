import { useContext } from 'react';

import useFolding from '@/hooks/use.folding';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedOption from '@/components/themed/themed.option';

import ChapterList from './chapter.list.jsx';
import Menu from '@/services/menu';
import { GlobalContext } from '@/contexts/global.context';

export default function BookListItem({ book, keys, folding }) {
  const { keychain } = useContext(GlobalContext);
  const { expanded, onPress } = useFolding(folding, keys);

  const linkColor = useThemeColor({}, 'link');
  const color = Menu.getColor(keychain, keys, linkColor);

  return (
    <>
      <ThemedOption type="item" onPress={onPress} color={color}>
        {book.name}
      </ThemedOption>

      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}
