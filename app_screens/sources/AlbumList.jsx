import { useContext, useMemo, useState } from "react";

import ThemedView from "@/components/ThemedView";

import AlbumListItem from "./AlbumListItem";
import GlobalContext from "@/contexts/GlobalContext";

export default function AlbumList({ albums }) {
  const { keychain } = useContext(GlobalContext);
  const [unfolded, setUnfolded] = useState(keychain);
  const folding = [unfolded, setUnfolded];

  useMemo(() => setUnfolded(keychain), [keychain]);

  return albums.map((album, key) => {
    return (
      <ThemedView key={"album-" + key}>
        <AlbumListItem album={album} keys={[key]} folding={folding} />
      </ThemedView>
    );
  });
}
