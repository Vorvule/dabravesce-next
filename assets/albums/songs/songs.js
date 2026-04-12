import christmas from './christmas.json';
import easters from './easters.json';
// import  folk  from "./folk.json";
import prayal from './prayal.json';

const songs = {
  slug: 'spiritual',
  name: 'Спевы',
  text: [
    {
      slug: 'easter-songs',
      name: 'Велікодныя спевы',
      text: easters,
    },
    {
      slug: 'chrismas-songs',
      name: 'Калядныя спевы',
      text: christmas,
    },
    {
      slug: 'prayal-songs',
      name: 'Малітоўныя спевы',
      text: prayal,
    },
    // {
    //   name: 'Народныя спевы',
    //   text: folk,
    // },
  ],
};

export default songs;
