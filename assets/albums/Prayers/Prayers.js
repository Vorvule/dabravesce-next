import { Daily } from './Daily.js';
import { Easter } from './Easter.js';
import { Housel } from './Housel.js';

export const prayers = {
  name: 'Малітоўнік',
  slug: 'prayer-book',
  text: [
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
