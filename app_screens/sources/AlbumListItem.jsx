import { useMemo, useState } from "react";

import BookList from "./BookList";

import ThemedOption from "@/components/ThemedOption";
import Menu from "@/functions/Menu";

export default function AlbumListItem({ album, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useMemo(() => {
    unfolded[0] == keys[0] ? setExpanded(true) : setExpanded(false);
  }, [unfolded]);

  const onPress = () => {
    unfolded[0] == keys[0] ? setExpanded(!expanded) : setUnfolded(keys);
  };

  return (
    <>
      <ThemedOption onPress={onPress} color={Menu.getColor(keys)}>
        {album.name}
      </ThemedOption>

      {expanded && (
        <BookList books={album.text} keys={keys} folding={folding} />
      )}
    </>
  );
}
