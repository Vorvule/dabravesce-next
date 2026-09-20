import psalms from './old.testament.json' with { type: 'json' };

const oldTestament = {
  slug: 'old-testament',
  name: 'Стары Запавет',
  text: [
    {
      slug: 'psalter',
      name: 'Псалтыр',
      text: psalms,
    },
  ],
};

export default oldTestament;
