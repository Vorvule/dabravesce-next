import { ApocalypseContent } from './ApocalypseContent.js';
import { EpistlesContent } from './EpistlesContent.js';

export const epistlesApocalypse = {
  slug: 'apostle-epistles-and-apocalypse',
  name: 'Пасланні Апосталаў і Апакаліпсіс',
  text: [
    ...EpistlesContent,
    {
      slug: 'apocalypse',
      name: 'Апака́ліпсіс, або Адкраве́нне святога Апостала Іаана Багаслова',
      text: ApocalypseContent,
    },
  ],
};
