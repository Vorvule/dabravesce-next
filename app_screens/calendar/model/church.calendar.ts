class ChurchCalendar {
  // EASTER
  getOrthodoxEaster(year: number): Date {
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;

    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;

    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;

    const julian = new Date(Date.UTC(year, month - 1, day));
    julian.setUTCDate(julian.getUTCDate() + this.getJulianOffset(2026));

    return julian;
  }

  getJulianOffset(year: number): number {
    return Math.floor(year / 100) - Math.floor(year / 400) - 2;
  }

  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }

  // FEASTS
  getTwelveGreatFeasts(year: number) {
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

    return fixed.map(([month, day, title]: (string | number)[]) => {
      const feastDate = Date.UTC(year, +month - 1, +day);
      const date = new Date(feastDate);
      // date.setUTCDate(date.getUTCDate());

      return {
        date: this.formatDate(date),
        title,
        type: 'twelve',
        fastingLevel: 'no_fast',
      };
    });
  }

  getMovableTwelve(year: number) {
    const easter = this.getOrthodoxEaster(year);

    const create = (offset: number, title: string) => {
      const d = new Date(easter);
      d.setUTCDate(d.getUTCDate() + offset);
      return {
        date: this.formatDate(d),
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

  // LENTS
  generateGreatLent(year: number) {
    const easter = this.getOrthodoxEaster(year);
    const start = new Date(easter);
    start.setUTCDate(start.getUTCDate() - 48);

    const days = [];

    for (let i = 0; i < 48; i++) {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + i);

      days.push({
        date: this.formatDate(date),
        title: i === 0 ? 'Пачатак Вялікага посту' : 'Вялікі пост',
        type: 'fast',
        fastingLevel: i === 0 ? 'strict_fast' : 'fast',
        description: 'Дзень Вялікага посту',
      });
    }

    return days;
  }

  generateWeeklyFasts(year: number) {
    const result = [];
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year, 11, 31));

    while (start <= end) {
      const day = start.getUTCDay();

      if (day === 3 || day === 5) {
        result.push({
          date: this.formatDate(start),
          title: 'Штотыднёвы пост', //  (серада/пятніца)
          type: 'fast',
          fastingLevel: 'fast',
        });
      }

      start.setUTCDate(start.getUTCDate() + 1);
    }

    return result;
  }

  // SAINTS
  getMajorSaints(year: number) {
    const saints = [
      [12, 19, 'Свяціцель Мікалай Цудатворац'],
      [7, 12, 'Святыя апосталы Пётр і Павел'],
      [10, 14, 'Пакроў Прасвятой Багародзіцы'],
    ];

    return saints.map(([month, day, name]) => {
      const date = new Date(Date.UTC(year, +month - 1, +day));

      return {
        date: this.formatDate(date),
        title: name,
        type: 'saint',
      };
    });
  }

  // OUTPUT
  generateFullLiturgicalCalendar(year: number) {
    const easter = {
      date: this.formatDate(this.getOrthodoxEaster(year)),
      title: 'Пасха. Светлае Хрыстова Уваскрасенне',
      type: 'great',
      fastingLevel: 'no_fast',
    };

    const all = [
      easter,
      ...this.generateGreatLent(year),
      ...this.generateWeeklyFasts(year),
      ...this.getTwelveGreatFeasts(year),
      ...this.getMovableTwelve(year),
      ...this.getMajorSaints(year),
    ];

    return all.sort((a, b) => a.date.localeCompare(b.date));
  }
}

export const churchCalendar = new ChurchCalendar();
