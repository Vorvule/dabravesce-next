import { useContext, useMemo, useState } from "react";

import ThemedView from "@/components/ThemedView";

import AlbumListItem from "./AlbumListItem";
import ChainContext from "@/contexts/ChainContext";

export default function AlbumList({ albums }) {
  const { chain } = useContext(ChainContext);
  const [folding, setFolding] = useState(chain);

  useMemo(() => setFolding(chain), [chain]);

  return albums.map((album, key) => {
    return (
      <ThemedView key={"album-" + key}>
        <AlbumListItem
          album={album}
          keys={[key]}
          folding={[folding, setFolding]}
        />
      </ThemedView>
    );
  });
}
