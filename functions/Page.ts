import SlugchainMap from '@/functions/mapping/SlugchainMap';
import KeychainMap from '@/functions/mapping/KeychainMap';
import appSources from '@/assets/albums/app.sources.js';

interface Chapter {
  text: string[];
}

interface Book {
  name: string;
  slug: string;
  text: Chapter[];
}

interface Album {
  name: string;
  slug: string;
  text: Book[];
}

export default class Page {
  static getUrl(keychain: number[]): any {
    return 'page/' + KeychainMap[keychain.join('~')];
  }

  static slugchainValid(slugchain: string): boolean {
    return SlugchainMap[slugchain] !== undefined;
  }

  static getKeychain(slugchain: string): number[] {
    return SlugchainMap[slugchain];
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
