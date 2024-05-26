import { Christmas } from "./Christmas";
import { Easters } from "./Easters";
// import { Folk } from "./Folk";
import { Prayal } from "./Prayal";

export const songs = {
  name: "Духоўныя Спевы",
  text: [
    {
      name: "Велікодныя спевы",
      text: Easters,
    },
    {
      name: "Калядныя спевы",
      text: Christmas,
    },
    {
      name: "Малітоўныя спевы",
      text: Prayal,
    },
    // {
    //   name: "Народныя спевы",
    //   text: Folk,
    // },
  ],
};
