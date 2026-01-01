import { useContext, useEffect, useState } from 'react';

import ThemedView from '@/components/ThemedView';

import AlbumListItem from './AlbumListItem';
import { GlobalContext } from '@/contexts/GlobalContext';

export default function AlbumList({ albums }) {
  const { keychain } = useContext(GlobalContext);
  const [unfolded, setUnfolded] = useState(keychain);
  const folding = [unfolded, setUnfolded];

  useEffect(() => setUnfolded(keychain), [keychain]);

  // TODO Add Suspense / Lazy load

  return albums.map((album, key) => {
    return (
      <ThemedView key={'album-' + key}>
        <AlbumListItem album={album} keys={[key]} folding={folding} />
      </ThemedView>
    );
  });
}
