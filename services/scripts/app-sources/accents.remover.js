import { writeFileSync } from 'fs';
import appSources from '../../../assets/albums/app.sources.js';
import removeAccents from './remove.accents.js';

/**
 * The script is to remove accent marks from the app sources
 * and write the result into `assets/albums/app.sources.searchable.js`.
 *
 * Run:
 * `node services/scripts/app-sources/accents.remover.js`
 */

const OUTPUT_PATH = new URL('../../../assets/albums/app.sources.searchable.js', import.meta.url);

const stripAccentsDeep = (value) => {
  if (typeof value === 'string') {
    return removeAccents(value);
  }
  if (Array.isArray(value)) {
    return value.map(stripAccentsDeep);
  }
  if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) {
      value[key] = stripAccentsDeep(value[key]);
    }
  }
  return value;
};

const getAppSourcesSearchable = () => {
  const sources = stripAccentsDeep(structuredClone(appSources));

  const prefix = 'const appSourcesSearchable = ';
  const suffix = '\n\nexport default appSourcesSearchable;\n';
  const output = prefix + JSON.stringify(sources, null, 2) + suffix;

  writeFileSync(OUTPUT_PATH, output);
};

getAppSourcesSearchable();

export default getAppSourcesSearchable;
