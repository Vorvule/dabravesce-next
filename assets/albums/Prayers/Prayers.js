import { Daily } from "./Daily";
import { Easter } from "./Easter";
import { Housel } from "./Housel";

export const prayers = {
  name: "Малітоўнік",
  text: [
    {
      name: "Малітвы штодзённыя",
      text: Daily,
    },
    {
      name: "Малітвы прычашчэння",
      text: Housel,
    },
    {
      name: "Малітвы велікодныя",
      text: Easter,
    },
  ],
};
