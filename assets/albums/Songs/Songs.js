import { Christmas } from "./Christmas";
import { Easters } from "./Easters";
// import { Folk } from "./Folk";
import { Prayal } from "./Prayal";

export const songs = {
  slug: "spiritual",
  name: "Духоўныя Спевы",
  text: [
    {
      slug: "easter-songs",
      name: "Велікодныя спевы",
      text: Easters,
    },
    {
      slug: "chrismas-songs",
      name: "Калядныя спевы",
      text: Christmas,
    },
    {
      slug: "prayal-songs",
      name: "Малітоўныя спевы",
      text: Prayal,
    },
    // {
    //   name: "Народныя спевы",
    //   text: Folk,
    // },
  ],
};
