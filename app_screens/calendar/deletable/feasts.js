import Easter from './easter.js';

class Feasts {
  static getTwelveGreatFeasts(year) {
    const offset = Math.floor(year / 100) - Math.floor(year / 400) - 2;

    const fixed = [
      [1, 7, 'Нараджэнне Хрыстова'],
      [1, 19, 'Хрышчэнне Гасподняе'],
      [2, 15, 'Стрэчанне Гасподняе'],
      [4, 7, 'Благавешчанне'],
      [8, 19, 'Ператварэнне Гасподняе'],
      [8, 28, 'Успенне Багародзіцы'],
      [9, 21, 'Нараджэнне Багародзіцы'],
      [9, 27, 'Узвіжанне Крыжа'],
      [12, 4, 'Увядзенне ў храм Багародзіцы'],
    ];

    return fixed.map(([m, d, title]) => {
      const date = new Date(Date.UTC(year, m - 1, d));
      date.setUTCDate(date.getUTCDate() + offset);

      return {
        date: Easter.formatDate(date),
        title,
        type: 'twelve',
        fastingLevel: 'no_fast',
      };
    });
  }

  static getMovableTwelve(year) {
    const easter = Easter.getOrthodoxEaster(year);

    const create = (offset, title) => {
      const d = new Date(easter);
      d.setUTCDate(d.getUTCDate() + offset);
      return {
        date: Easter.formatDate(d),
        title,
        type: 'twelve',
      };
    };

    return [
      create(-7, 'Уваход Гасподні ў Іерусалім'),
      create(39, 'Узнясенне Гасподняе'),
      create(49, 'Дзень Святой Тройцы'),
    ];
  }
}
