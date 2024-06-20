import { useMemo, useState } from "react";

import ChapterList from "./ChapterList";
import ThemedOption from "@/components/ThemedOption";

import MenuService from "@/functions/MenuService";

export default function BookListItem({ book, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useMemo(() => {
    setExpanded(equal(unfolded, keys));
  }, [unfolded]);

  const onPress = () => {
    equal(unfolded, keys) ? setExpanded(!expanded) : setUnfolded(keys);
  };

  const color = MenuService.getColor(keys);

  return (
    <>
      <ThemedOption onPress={onPress} color={color}>
        {book.name}
      </ThemedOption>

      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}

const equal = (unfolded, keys) => {
  return unfolded[0] == keys[0] && unfolded[1] == keys[1];
};
