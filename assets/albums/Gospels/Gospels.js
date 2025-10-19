import { John } from './John.js';
import { Luke } from './Luke.js';
import { Mark } from './Mark.js';
import { Matthew } from './Matthew.js';

export const gospels = {
  slug: 'gospels',
  name: 'Евангеллі',
  text: [
    {
      slug: 'matthew',
      name: 'Святое Дабравесце паводле Матфея',
      text: Matthew,
    },
    {
      slug: 'mark',
      name: 'Святое Дабравесце паводле Марка',
      text: Mark,
    },
    {
      slug: 'luke',
      name: 'Святое Дабравесце паводле Лукі',
      text: Luke,
    },
    {
      slug: 'john',
      name: 'Святое Дабравесце паводле Іаана',
      text: John,
    },
  ],
};
