import { useEffect, useState } from "react";

import Books from "./Books";
import MenuItem from "../components/basic/MenuItem";

import { MenuPage } from "../service/MenuPage";

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
      <MenuItem onPress={onPress} styling={MenuPage.getStyling(keys)}>
        {album.name}
      </MenuItem>

      {expanded && <Books books={album.text} keys={keys} folding={folding} />}
    </>
  );
}
