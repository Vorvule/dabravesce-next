import john from './gospels/john.json';
import luke from './gospels/luke.json';
import mark from './gospels/mark.json';
import matt from './gospels/matt.json';
import apostlesContent from './apostles/apostles.content.json';
import epistlesContent from './apostles/epistles.content.json';
import apocalypseContent from './apostles/apocalypse.content.json';

const newTestament = {
  slug: 'new-testament',
  name: 'Новы Запавет',
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
    {
      slug: 'apostles',
      name: 'Дзеянні святых Апосталаў',
      text: apostlesContent,
    },
    ...epistlesContent,
    {
      slug: 'apocalypse',
      name: 'Апака́ліпсіс, або Адкраве́нне святога Апостала Іаана Багаслова',
      text: apocalypseContent,
    },
  ],
};

export default newTestament;
