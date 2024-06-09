import { useContext } from "react";

import { ChainContext } from "@/contexts/ChainContext";
import { useThemeColor } from "@/hooks/useThemeColor";

export class MenuService {
  static getColorStyle(keys) {
    const color = useThemeColor({}, "tint");

    return this.keysAreActive(keys) ? {color} : {};
  }

  static keysAreActive(keys) {
    const chain = useContext(ChainContext).chain;

    switch (keys.length) {
      case 1:
        return keys[0] == chain[0];
      case 2:
        return keys[0] == chain[0] && keys[1] == chain[1];
      case 3:
        return (
          keys[0] == chain[0] && keys[1] == chain[1] && keys[2] == chain[2]
        );
      default:
        return false;
    }
  }

  static clearText(text) {
    return text.replace(/ \| .+/, "");
  }
}
