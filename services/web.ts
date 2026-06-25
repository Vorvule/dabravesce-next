import Page from './page';

export default class Web {
  public static getPageTitle(keys: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keys);

    return [chapter.name, bookName, albumName].join(' ~ ');
  }

  public static getDescription(path: string): string {
    const description = 'Дабравесце ~ Біблія, малітоўнік, каляндар, спевы, кнігі'
    + ' ~ Беларуская Праваслаўная Царква';

    switch (path) {
      case '/':
        return description + ' ~ Каляндар';
      case '/menu':
        return description + ' ~ Крыніцы';
      default:
        return description + ' ~ Змест';
    }
  }

  public static getPageDescription(keys: number[]): string {
    const { albumName, bookName, chapter } = Page.getContent(keys);

    return ['Дабравесце', albumName, bookName, chapter.name].join(' ~ ');
  }
}
