import SlugchainMap from "@/functions/mapping/SlugchainMap";
import KeychainMap from "@/functions/mapping/KeychainMap";
import AppSources from "@/assets/albums/AppSources";

export default class Content {
  static getUrl(keychain: number[]): string {
    return "content/" + KeychainMap[keychain.join("~")];
  }

  static urlIsValid(url: string): boolean {
    return SlugchainMap[url] != undefined;
  }

  static getKeychain(slugChain: string): number[] {
    return SlugchainMap[slugChain];
  }

  static keychainIsValid(keychain: number[]): boolean {
    try {
      const [albumKey, bookKey, chapterKey] = keychain;

      return AppSources[albumKey].text[bookKey].text[chapterKey] != undefined;
    } catch {
      return false;
    }
  }

  static getContentValues(keychain: number[]) {
    const [albumKey, bookKey, chapterKey] = keychain;

    const albumName = AppSources[albumKey].name;
    const bookName = AppSources[albumKey].text[bookKey].name;
    const chapter = AppSources[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }

  static getContent(keychain: number[]) {
    return this.getContentValues(keychain);
  }

  // Not used
  static getReadableUrl(slugs: string[]) {
    return "content/" + slugs.join("~");
  }
}
