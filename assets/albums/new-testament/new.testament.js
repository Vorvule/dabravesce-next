import john from './gospels/john.json' with { type: 'json' };
import luke from './gospels/luke.json' with { type: 'json' };
import mark from './gospels/mark.json' with { type: 'json' };
import matt from './gospels/matt.json' with { type: 'json' };
import apostlesContent from './apostles/apostles.json' with { type: 'json' };
import epistlesContent from './apostles/epistles.json' with { type: 'json' };
import apocalypseContent from './apostles/apocalypse.json' with { type: 'json' };

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
      slug: 'apostle-acts',
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
