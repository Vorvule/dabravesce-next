import saintNamesMen from '../../../assets/saints/saint.names.men.json' with { type: 'json' };
// import saintNamesWomen from '../../../assets/saints/saint.names.women.json' with { type: 'json' };
import { writeFileSync } from 'fs';

const OUTPUT_PATH = new URL('../../../assets/saints/saint.names.json', import.meta.url);

/** node services/scripts/app-sources/replace.diacritics.js */
const replacements = {
  ђ: 'а' ,
  Ј: 'Е' ,
  ј: 'е' ,
  l: 'І' ,
  ѕ: 'і' ,
  ѓ: 'о' ,
  љ: 'у' ,
  '¢': 'ў',
  ќ: 'ы' ,
  њ: 'э' ,
  Ю́: 'Ю',
  џ: 'ю' ,
  Ћ: 'Я' ,
  ћ: 'я' ,
};

const saintNames = saintNamesMen.map((name) => {
  let clearName = name;

  for (const replacement in replacements) {
    clearName = clearName.replaceAll(replacement, replacements[replacement]);
  }

  return clearName;
});

writeFileSync(OUTPUT_PATH, JSON.stringify(saintNames));
