import SlugchainMap from "@/functions/mapping/SlugchainMap";
import KeychainMap from "@/functions/mapping/KeychainMap";
import AppSources from "@/assets/albums/AppSources";

export default class Page {
  static getUrl(keychain: number[]): any {
    return "page/" + KeychainMap[keychain.join("~")];
  }

  static slugchainValid(slugchain: string): boolean {
    return SlugchainMap[slugchain] != undefined;
  }

  static getKeychain(slugchain: string): number[] {
    return SlugchainMap[slugchain];
  }

  static keychainValid(keychain: number[]): boolean {
    try {
      const [albumKey, bookKey, chapterKey] = keychain;

      return AppSources[albumKey].text[bookKey].text[chapterKey] != undefined;
    } catch {
      return false;
    }
  }

  static getContent(keychain: number[]) {
    const [albumKey, bookKey, chapterKey] = keychain;

    const albumName: string = AppSources[albumKey].name;
    const bookName: string = AppSources[albumKey].text[bookKey].name;
    const chapter = AppSources[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }
}
