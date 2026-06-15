import { useContext, useState } from 'react';

import ThemedView from '@/components/themed/themed.view';

import AlbumListItem from './album.list.item.jsx';
import { GlobalContext } from '@/contexts/global.context';

export default function AlbumList({ albums }) {
  const { keychain } = useContext(GlobalContext);
  const [unfolded, setUnfolded] = useState(keychain);
  const folding = [unfolded, setUnfolded];

  return albums.map((album, key) => {
    return (
      <ThemedView key={'album-' + key}>
        <AlbumListItem album={album} keys={[key]} folding={folding} />
      </ThemedView>
    );
  });
}
