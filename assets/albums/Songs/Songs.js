import { Christmas } from './Christmas.js';
import { Easters } from './Easters.js';
// import { Folk } from "./Folk.js";
import { Prayal } from './Prayal.js';

export const songs = {
  slug: 'spiritual',
  name: 'Спевы',
  text: [
    {
      slug: 'easter-songs',
      name: 'Велікодныя спевы',
      text: Easters,
    },
    {
      slug: 'chrismas-songs',
      name: 'Калядныя спевы',
      text: Christmas,
    },
    {
      slug: 'prayal-songs',
      name: 'Малітоўныя спевы',
      text: Prayal,
    },
    // {
    //   name: 'Народныя спевы',
    //   text: Folk,
    // },
  ],
};
