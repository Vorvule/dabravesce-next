import slugchainMap from '@/functions/mapping/slugchain.map.json';
import keychainMap from '@/functions/mapping/keychain.map.json';
import appSources from '@/assets/albums/app.sources.js';

interface Chapter { text: string[]; }
interface Book { name: string; slug: string; text: Chapter[]; }
interface Album { name: string;slug: string;text: Book[]; }

type SlugchainMapType = Record<string, number[]>;
type KeychainMapType = Record<string, string>;

export default class Page {
  static getUrl(keychain: number[]): any {
    const key = keychain.join('~');
    return 'page/' + (keychainMap as KeychainMapType)[key];
  }

  static slugchainValid(slugchain: string): boolean {
    return (slugchainMap as SlugchainMapType)[slugchain] !== undefined;
  }

  static getKeychain(slugchain: string): number[] {
    return (slugchainMap as SlugchainMapType)[slugchain];
  }

  static keychainValid(keychain: number[]): boolean {
    try {
      const [albumKey, bookKey, chapterKey] = keychain;

      return (appSources[albumKey] as Album).text[bookKey].text[chapterKey] !== undefined;
    } catch {
      return false;
    }
  }

  static getContent(keychain: number[]) {
    const [albumKey, bookKey, chapterKey] = keychain;

    const album = appSources[albumKey] as Album;
    const albumName: string = album.name;

    const bookName: string = album.text[bookKey].name;
    const chapter = album.text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }
}
