import { useContext } from "react";

import GlobalContext from "@/contexts/GlobalContext";
import { ColorTheme } from "./ColorTheme";

export default class Menu {
  static getColor(keys) {
    const linkColor = ColorTheme.getColor("link");
    const linkStyle = { color: linkColor };

    return this.keysAreActive(keys) ? linkStyle : {};
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
