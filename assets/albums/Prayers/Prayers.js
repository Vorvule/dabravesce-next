import { Daily } from "./Daily";
import { Easter } from "./Easter";
import { Housel } from "./Housel";

export const prayers = {
  name: "Малітоўнік",
  slug: "prayer-book",
  text: [
    {
      name: "Малітвы штодзённыя",
      slug: "daily-prayers",
      text: Daily,
    },
    {
      name: "Малітвы прычашчэння",
      slug: "housel-prayers",
      text: Housel,
    },
    {
      name: "Малітвы велікодныя",
      slug: "easter-prayers",
      text: Easter,
    },
  ],
};
