import { useEffect, useState } from "react";

import ChapterList from "./ChapterList";
import ThemedOption from "@/components/ThemedOption";
import { MenuService } from "@/service/MenuService";

export default function BookItem({ book, keys, folding }) {
  const [expanded, setExpanded] = useState(false);
  const [unfolded, setUnfolded] = folding;

  useEffect(() => {
    setExpanded(equal(unfolded, keys));
  }, [unfolded]);

  const onPress = () => {
    equal(unfolded, keys) ? setExpanded(!expanded) : setUnfolded(keys);
  };

  const colorStyle = MenuService.getColorStyle(keys);

  return (
    <>
      <ThemedOption onPress={onPress} colorStyle={colorStyle}>
        {book.name}
      </ThemedOption>

      {expanded && <ChapterList chapters={book.text} keys={keys} />}
    </>
  );
}

const equal = (unfolded, keys) => {
  return unfolded[0] == keys[0] && unfolded[1] == keys[1];
};