import { useEffect, useState } from 'react';

import BookList from './BookList';

import ThemedOption from '@/components/ThemedOption';
import Menu from '@/functions/Menu';

export default function AlbumListItem({ album, keys, folding }) {
  const [firstRun, setFirstRun] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useEffect(() => {
    if (firstRun) return;
    setExpanded(unfolded[0] === keys[0]);
  }, [unfolded]);

  const onPress = () => {
    firstRun && setFirstRun(false);
    unfolded[0] === keys[0] ? setExpanded(!expanded) : setUnfolded(keys);
  };

  return (
    <>
      <ThemedOption type='item' onPress={onPress} color={Menu.getColor(keys)}>
        {album.name}
      </ThemedOption>

      {expanded && (
        <BookList books={album.text} keys={keys} folding={folding} />
      )}
    </>
  );
}
