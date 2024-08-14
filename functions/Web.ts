import Page from "./Page";

export default class Web {
  public static getTitle(pathname: string): string {
    switch (pathname) {
      case "/":
        return "Дабравесце ~ Галоўная";
      case "/menu":
        return "Дабравесце ~ Крыніцы";
      default:
        return "Дабравесце";
    }
  }

  public static getPageTitle(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return [chapter.name, bookName, albumName].join(" ~ ");
  }

  public static getDescription(pathname: string): string {
    switch (pathname) {
      case "/":
        return "Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага жыцця ~ Беларуская Праваслаўная Царква ~ Хрысціянства, Ісус Хрыстос ~ Галоўная";
      case "/menu":
        return "Дабравесце ~ Евангелле, Кнігі Апосталаў, Псалтыр, Малітоўнік, Акафісты, Богаслужэнні, Хрысціянскія кнігі і Пабожныя спевы ~ Змест";
      default:
        return "Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага жыцця";
    }
  }

  public static getPageDescription(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return ["Дабравесце", albumName, bookName, chapter.name].join(" ~ ");
  }
}
