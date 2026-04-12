import canons from './canons.json';
import liturgy from './liturgy.json';
import troparionsSunday from './troparions.sunday.json';
import troparionsFestive from './troparions.festive.json';
import acathisti from './acathisti.json';
import greatCanon from './great-canon/great.canon.js';

const worships = {
  slug: 'worships',
  name: 'Богаслужэнні',
  text: [
    {
      slug: 'acathisti',
      name: 'Акафісты',
      text: acathisti,
    },
    {
      slug: 'great-canon',
      name: 'Канон вялікі прападобнага айца нашага Андрея Крыцкага і Іерусалімскага',
      text: greatCanon,
    },
    {
      slug: 'canons',
      name: 'Каноны іншыя',
      text: canons,
    },
    {
      slug: 'liturgy',
      name: 'Літургія',
      text: liturgy,
    },
    {
      slug: 'sunday-troparions',
      name: 'Трапары і кандакі нядзельныя',
      text: troparionsSunday,
    },
    {
      slug: 'festive-troparions',
      name: 'Трапары і кандакі святаў',
      text: troparionsFestive,
    },
  ],
};

export default worships;
