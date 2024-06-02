import { allAlbums } from "@/assets/albums/AllAlbums";
import { DailyChain } from "./DailyChain";

export class CorePage {
  static getContent(urlChain) {
    const arrayChain = this.getRouteChain(urlChain);

    return this.getContents(arrayChain);
  }

  static getRouteChain(urlChain) {
    return this.isString(urlChain)
      ? urlChain.split("-")
      : DailyChain.getDailyChain();
  }

  static getContents(arrayChain) {
    const [albumKey, bookKey, chapterKey] = arrayChain;

    const albumName = allAlbums[albumKey].name;
    const bookName = allAlbums[albumKey].text[bookKey].name;
    const chapter = allAlbums[albumKey].text[bookKey].text[chapterKey];

    return { albumName, bookName, chapter };
  }

  static chainsAreSame(one, two) {
    return one[0] == two[0] && one[1] == two[1] && one[2] == two[2];
  }

  static isString(variable) {
    return typeof variable === "string" || variable instanceof String;
  }
}
