import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { ChainContext } from "../contexts/ChainContext";
import { MenuPage } from "../service/MenuPage";

import MenuItem from "../components/basic/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);

    navigation.navigate("Тэкст", { chain: keys });
  };

  return (
    <MenuItem onPress={onPress} styling={MenuPage.getStyling(keys)}>
      {MenuPage.clear(chapter.name)}
    </MenuItem>
  );
}
