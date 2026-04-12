import apocalypseContent from './apocalypse.content.json';
import epistlesContent from './epistles.content.json';

const epistlesApocalypse = {
  slug: 'apostle-epistles-and-apocalypse',
  name: 'Пасланні Апосталаў і Апакаліпсіс',
  text: [
    ...epistlesContent,
    {
      slug: 'apocalypse',
      name: 'Апака́ліпсіс, або Адкраве́нне святога Апостала Іаана Багаслова',
      text: apocalypseContent,
    },
  ],
};

export default epistlesApocalypse;
