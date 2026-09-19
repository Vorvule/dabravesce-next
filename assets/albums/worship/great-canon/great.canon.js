import monday from './monday.json' with { type: 'json' };
import tuesday from './tuesday.json' with { type: 'json' };
import wednesday from './wednesday.json' with { type: 'json' };
import thursday from './thursday.json' with { type: 'json' };

const greatCanon = [
  {
    slug: 'monday',
    name: 'У панядзелак першага тыдня вялікага посту на вялікім павячэр’і',
    text: monday,
  },
  {
    slug: 'tuesday',
    name: 'У аўторак першага тыдня Вялікага посту на вялікім павячэр’і',
    text: tuesday,
  },
  {
    slug: 'wednesday',
    name: 'У сераду першага тыдня Вялікага посту на вялікім павячэр’і',
    text: wednesday,
  },
  {
    slug: 'thursday',
    name: 'У чацвер першага тыдня Вялікага посту на вялікім павячэр’і',
    text: thursday,
  },
];

export default greatCanon;
