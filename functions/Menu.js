import { useContext } from "react";

import GlobalContext from "@/contexts/GlobalContext";
import useThemeColor from "@/hooks/useThemeColor";

export default class Menu {
  static getColor(keys) {
    const color = useThemeColor({}, "tint");

    return this.keysAreActive(keys) ? { color } : {};
  }

  static keysAreActive(keys) {
    const { keychain } = useContext(GlobalContext);

    switch (keys.length) {
      case 1:
        return keys[0] == keychain[0];
      case 2:
        return keys[0] == keychain[0] && keys[1] == keychain[1];
      case 3:
        return (
          keys[0] == keychain[0] &&
          keys[1] == keychain[1] &&
          keys[2] == keychain[2]
        );
      default:
        return false;
    }
  }

  static clearText(text) {
    return text.replace(/ \| .+/, "");
  }
}
