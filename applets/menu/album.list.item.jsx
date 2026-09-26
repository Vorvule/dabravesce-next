import { useContext } from 'react';

import useFolding from '@/hooks/use.folding';
import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedOption from '@/components/themed/themed.option';

import BookList from './book.list.jsx';
import Menu from '@/services/menu';
import { GlobalContext } from '@/contexts/global.context';

export default function AlbumListItem({ album, keys, folding }) {
  const { keychain } = useContext(GlobalContext);
  const { expanded, onPress } = useFolding(folding, keys);

  const linkColor = useThemeColor({}, 'link');
  const color = Menu.getColor(keychain, keys, linkColor);

  return (
    <>
      <ThemedOption type="item" onPress={onPress} color={color}>
        {album.name}
      </ThemedOption>

      {expanded && (
        <BookList books={album.text} keys={keys} folding={folding} />
      )}
    </>
  );
}
