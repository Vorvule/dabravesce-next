import { useContext } from 'react';

import ThemedView from '@/components/themed/themed.view';

import AlbumListItem from './album.list.item.jsx';
import { GlobalContext } from '@/contexts/global.context';

export default function AlbumList({ albums }) {
  const { menuKeychain, updateMenuKeychain } = useContext(GlobalContext);
  const folding = [menuKeychain, updateMenuKeychain];

  return albums.map((album, key) => {
    return (
      <ThemedView key={'album-' + key}>
        <AlbumListItem album={album} keys={[key]} folding={folding} />
      </ThemedView>
    );
  });
}
