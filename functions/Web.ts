import Page from './Page';

export default class Web {
  public static getTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return 'Дабравесце ~ Змест';
      default:
        return 'Дабравесце ~ Крыніцы';
    }
  }

  public static getPageTitle(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return [chapter.name, bookName, albumName].join(' ~ ');
  }

  public static getDescription(pathname: string): string {
    switch (pathname) {
      case '/':
        return (
          'Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага развіцця ~ Беларуская' +
          ' Праваслаўная Царква Госпада нашага Ісуса Хрыста ~ Галоўная'
        );
      default:
        return 'Дабравесце ~ Біблія, Малітоўнік і іншыя крыніцы духоўнага развіцця ~ БПЦ';
    }
  }

  public static getPageDescription(keychain: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keychain);

    return ['Дабравесце', albumName, bookName, chapter.name].join(' ~ ');
  }
}
