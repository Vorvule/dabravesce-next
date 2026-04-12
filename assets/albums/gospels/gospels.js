import john from './john.json';
import luke from './luke.json';
import mark from './mark.json';
import matt from './matt.json';

const gospels = {
  slug: 'gospels',
  name: 'Евангеллі',
  text: [
    {
      slug: 'matthew',
      name: 'Святое Дабравесце паводле Матфея',
      text: matt,
    },
    {
      slug: 'mark',
      name: 'Святое Дабравесце паводле Марка',
      text: mark,
    },
    {
      slug: 'luke',
      name: 'Святое Дабравесце паводле Лукі',
      text: luke,
    },
    {
      slug: 'john',
      name: 'Святое Дабравесце паводле Іаана',
      text: john,
    },
  ],
};

export default gospels;
