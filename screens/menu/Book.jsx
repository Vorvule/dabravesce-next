import { useContext, useEffect, useState } from "react";

import ChapterList from "./ChapterList";
import ThemedMenuItem from "@/components/ThemedMenuItem";

import { MenuService } from "@/service/MenuService";

export default function Book({ book, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useEffect(() => {
    setExpanded(equal(unfolded, keys));
  }, [unfolded]);

  const onPress = () => {
    equal(unfolded, keys) ? setExpanded(!expanded) : setUnfolded(keys);
  };

  return (
    <>
      <ThemedMenuItem onPress={onPress} styling={MenuService.getStyling(keys)}>
        {book.name}
      </ThemedMenuItem>

      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}

const equal = (unfolded, keys) => {
  return unfolded[0] == keys[0] && unfolded[1] == keys[1];
};
