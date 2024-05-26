import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { ChainContext } from "@/contexts/ChainContext";
import { MenuService } from "@/service/MenuService";

import ThemedMenuItem from "@/components/ThemedMenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);

    navigation.navigate("text", { chain: keys });
  };

  return (
    <ThemedMenuItem onPress={onPress} styling={MenuService.getStyling(keys)}>
      {MenuService.clear(chapter.name)}
    </ThemedMenuItem>
  );
}
