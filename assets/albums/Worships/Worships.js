import { GreatCanon } from './GreatCanon.js';
import { Canons } from './Canons.js';
import { Liturgy } from './Liturgy.js';
import { TroparionsSunday } from './TroparionsSunday.js';
import { TroparionsFestive } from './TroparionsFestive.js';
import { Acathisti } from '@/assets/albums/Worships/Acathisti.js';

export const worships = {
  slug: 'worships',
  name: 'Богаслужэнні',
  text: [
    {
      slug: 'acathisti',
      name: 'Акафісты',
      text: Acathisti,
    },
    {
      slug: 'great-canon',
      name: 'Канон вялікі прападобнага айца нашага Андрея Крыцкага і Іерусалімскага',
      text: GreatCanon,
    },
    {
      slug: 'canons',
      name: 'Каноны іншыя',
      text: Canons,
    },
    {
      slug: 'liturgy',
      name: 'Літургія',
      text: Liturgy,
    },
    {
      slug: 'sunday-troparions',
      name: 'Трапары і кандакі нядзельныя',
      text: TroparionsSunday,
    },
    {
      slug: 'festive-troparions',
      name: 'Трапары і кандакі святаў',
      text: TroparionsFestive,
    },
  ],
};
