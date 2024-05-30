import { useContext, useState } from "react";

import { ThemedView } from "@/components/ThemedView";
import { ChainContext } from "@/contexts/ChainContext";

import AlbumItem from "./AlbumItem";

export default function AlbumList({ albums }) {
  const chain = useContext(ChainContext).chain.slice(0, 2);
  // const folding = useState(chain);
  const folding = useState(false);

  return albums.map((album, key) => {
    return (
      <ThemedView key={"album-" + key}>
        <AlbumItem album={album} keys={[key]} folding={folding} />
      </ThemedView>
    );
  });
}
