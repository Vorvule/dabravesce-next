import { useContext, useEffect, useState } from 'react';

import { useThemeColor } from '@/hooks/use.theme.color';
import ThemedOption from '@/components/themed/themed.option';

import BookList from './book.list.jsx';
import Menu from '@/services/menu';
import { GlobalContext } from '@/contexts/global.context';

export default function AlbumListItem({ album, keys, folding }) {
  const [firstRun, setFirstRun] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  const linkColor = useThemeColor({}, 'link');
  const { keychain } = useContext(GlobalContext);
  const color = Menu.getColor(keychain, keys, linkColor);

  useEffect(() => {
    if (firstRun) return;
    setExpanded(unfolded[0] === keys[0]);
  }, [firstRun, keys, unfolded]);

  const onPress = () => {
    firstRun && setFirstRun(false);

    if (unfolded[0] === keys[0]) {
      setExpanded(!expanded);
    } else {
      setUnfolded(keys);
    }
  };

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
