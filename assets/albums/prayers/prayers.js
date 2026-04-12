import daily from './daily.json';
import easter from './easter.json';
import housel from './housel.json';

const prayers = {
  name: 'Малітоўнік',
  slug: 'prayer-book',
  text: [
    {
      name: 'Малітвы штодзённыя',
      slug: 'daily-prayers',
      text: daily,
    },
    {
      name: 'Малітвы прычашчэння',
      slug: 'housel-prayers',
      text: housel,
    },
    {
      name: 'Малітвы велікодныя',
      slug: 'easter-prayers',
      text: easter,
    },
  ],
};

export default prayers;
