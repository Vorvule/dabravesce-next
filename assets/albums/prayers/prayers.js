import daily from './daily.json' with { type: 'json' };
import easter from './easter.json' with { type: 'json' };
import litia from './litia.json' with { type: 'json' };
import housel from './housel.json' with { type: 'json' };

const prayers = {
  name: 'Малітоўнік',
  slug: 'prayer-book',
  text: [
    {
      slug: 'litia',
      name: 'Ліція',
      text: litia,
    },
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
