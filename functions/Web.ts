import Page from "./Page";

export default class Web {
  private static getTitle(pathname: string, keychain: number[]): string {
    console.log("getTitle pathname", pathname);
    console.log("getTitle keychain", keychain);
    
    switch (pathname) {
      case "/":
        return "Галоўная";
      case "/menu":
        return "Крыніцы";
      default:
        const { albumName, bookName, chapter } = Page.getContent(keychain);
        return /*albumName + " ~ " +*/ bookName + " ~ " + chapter.name;
    }
  }

  public static getPageTitle(pathname: string, keychain: number[]): string {
    return /*"Дабравесце ~ " +*/ this.getTitle(pathname, keychain);
  }
}
