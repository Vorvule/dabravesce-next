import { useEffect, useState } from 'react';

import { useThemeColor } from '@/hooks/useThemeColor.ts';
import ThemedOption from '@/components/ThemedOption';

import BookList from './BookList';
import Menu from '@/functions/Menu';

export default function AlbumListItem({ album, keys, folding }) {
  const [firstRun, setFirstRun] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  const linkColor = useThemeColor({}, 'link');
  const color = Menu.getColor(keys, linkColor);

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
      <ThemedOption type='item' onPress={onPress} color={color}>
        {album.name}
      </ThemedOption>

      {expanded && (
        <BookList books={album.text} keys={keys} folding={folding} />
      )}
    </>
  );
}
