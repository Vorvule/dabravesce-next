import AppSources from "@/assets/albums/AppSources";
import { Daily } from "./Daily";

export class CorePage {
  static getContent(urlChain) {
    const arrayChain = this.getRouteChain(urlChain);

    return this.getContents(arrayChain);
  }

  static getRouteChain(urlChain) {
    return this.isValid(urlChain) ? urlChain.split("~") : Daily.getDailyChain();
  }

  static getContents(arrayChain) {
    const [albumKey, bookKey, chapterKey] = arrayChain;

    const albumName = AppSources[albumKey].name;
    const bookName = AppSources[albumKey].text[bookKey].name;
    const chapter = AppSources[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }

  static chainsAreSame(one, two) {
    return one[0] == two[0] && one[1] == two[1] && one[2] == two[2];
  }

  static isValid(chain) {
    const isString = typeof chain === "string" || chain instanceof String;
    if (!isString) return false;

    const isChain = chain.match(/\d+~\d+~\d+/);
    if (!isChain) return false;

    const [albumKey, bookKey, chapterKey] = chain.split("~");
    return AppSources[albumKey].text[bookKey].text[chapterKey] !== undefined;
  }
}
