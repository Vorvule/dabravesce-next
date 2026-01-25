import { promises as fs } from 'fs';
import AppSources from '../../assets/albums/AppSources.js';

/**
 * The script is to remove accent marks from the app sources
 */
const sources = structuredClone(AppSources);

sources.forEach((source) => {
  source.text.forEach((album) => {
    album.text.forEach((book) => {
      book.text.forEach((chapter, i) => {
        book.text[i] = removeAccents(chapter);
      });
    });
  });
});

const prefix = 'const AppSourcesSearchable = ';
const suffix = '\r\n\r\n' + 'export default AppSourcesSearchable;';
const output = prefix + JSON.stringify(sources, null, 2) + suffix;
await fs.writeFile('AppSourcesSearchable.js', output, 'utf8');

function removeAccents(text) {
  if (typeof text !== 'string') return text;

  const defaultDiacriticsRemovalMap = {
    а́: 'а',
    е́: 'е',
    ё́: 'ё',
    і́: 'і',
    í: 'і', // Added to offered
    о́: 'о',
    у́: 'у',
    ы́: 'ы',
    э́: 'э',
    ю́: 'ю',
    я́: 'я',
    А́: 'А',
    Е́: 'Е',
    Ё́: 'Ё',
    І́: 'І',
    О́: 'О',
    У́: 'У',
    Ы́: 'Ы',
    Э́: 'Э',
    Ю́: 'Ю',
    Я́: 'Я',
  };

  for (let diacritic in defaultDiacriticsRemovalMap) {
    const re = new RegExp(diacritic, 'g');
    text = text.replace(re, defaultDiacriticsRemovalMap[diacritic]);
  }

  return text;
}
