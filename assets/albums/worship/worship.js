import canons from './canons.json' with { type: 'json' };
import liturgy from './liturgy.json' with { type: 'json' };
import troparionsSunday from './troparions.sunday.json' with { type: 'json' };
import troparionsFestive from './troparions.festive.json' with { type: 'json' };
import acathisti from './acathists.json' with { type: 'json' };
import greatCanon from './great-canon/great.canon.js';

const worship = {
  slug: 'worships',
  name: 'Богаслужэбнае',
  text: [
    {
      slug: 'acathists',
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

export default worship;
