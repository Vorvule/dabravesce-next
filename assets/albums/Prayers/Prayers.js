import { Acathisti } from './Acathisti.js';
import { Daily } from './Daily.js';
import { Easter } from './Easter.js';
import { Housel } from './Housel.js';

export const prayers = {
  name: 'Малітоўнік',
  slug: 'prayer-book',
  text: [
    {
      slug: 'acathisti',
      name: 'Акафісты',
      text: Acathisti,
    },
    {
      name: 'Малітвы штодзённыя',
      slug: 'daily-prayers',
      text: Daily,
    },
    {
      name: 'Малітвы прычашчэння',
      slug: 'housel-prayers',
      text: Housel,
    },
    {
      name: 'Малітвы велікодныя',
      slug: 'easter-prayers',
      text: Easter,
    },
  ],
};
