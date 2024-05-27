import { useEffect, useState } from "react";

import BookList from "./BookList";
import ThemedOption from "@/components/ThemedOption";
import { MenuService } from "@/service/MenuService";

export default function AlbumItem({ album, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useEffect(() => {
    unfolded[0] == keys[0] ? setExpanded(true) : setExpanded(false);
  }, [unfolded]);

  const onPress = () => {
    unfolded[0] == keys[0] ? setExpanded(!expanded) : setUnfolded(keys);
  };

  const colorStyle = MenuService.getColorStyle(keys);

  return (
    <>
      <ThemedOption onPress={onPress} colorStyle={colorStyle}>
        {album.name}
      </ThemedOption>

      {expanded && (
        <BookList books={album.text} keys={keys} folding={folding} />
      )}
    </>
  );
}
