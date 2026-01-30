import Page from './Page';

export default class Web {
  public static getTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return 'Дабравесце ~ Крыніцы';
      case '/search':
        return 'Дабравесце ~ Пошук';
      default:
        return 'Дабравесце ~ Змест';
    }
  }

  public static getPageTitle(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return [chapter.name, bookName, albumName].join(' ~ ');
  }

  public static getDescription(pathname: string): string {
    const rootDescription =
      'Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага развіцця ~ ' +
      'Беларуская Праваслаўная Царква Госпада нашага Ісуса Хрыста ~ Галоўная';

    switch (pathname) {
      case '/':
        return rootDescription;
      case '/search':
        return 'Дабравесце ~ Пошук па змесце';
      default:
        return 'Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага развіцця ~ БПЦ';
    }
  }

  public static getPageDescription(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return ['Дабравесце', albumName, bookName, chapter.name].join(' ~ ');
  }
}
