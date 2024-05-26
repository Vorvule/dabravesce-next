import { useEffect, useState } from "react";

import Books from "./Books";
import ThemedMenuItem from "@/components/ThemedMenuItem";

import { MenuService as MenuService } from "@/service/MenuService";

export default function Album({ album, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useEffect(() => {
    unfolded[0] == keys[0] ? setExpanded(true) : setExpanded(false);
  }, [unfolded]);

  const onPress = () => {
    unfolded[0] == keys[0] ? setExpanded(!expanded) : setUnfolded(keys);
  };

  return (
    <>
      <ThemedMenuItem onPress={onPress} styling={MenuService.getStyling(keys)}>
        {album.name}
      </ThemedMenuItem>

      {expanded && <Books books={album.text} keys={keys} folding={folding} />}
    </>
  );
}
