import Easter from './easter.js';

class Lents {
  static generateGreatLent(year) {
    const easter = Easter.getOrthodoxEaster(year);
    const start = new Date(easter);
    start.setUTCDate(start.getUTCDate() - 48);

    const days = [];

    for (let i = 0; i < 48; i++) {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + i);

      days.push({
        date: Easter.formatDate(date),
        title: 'Вялікі пост',
        type: 'fast',
        fastingLevel: i === 0 ? 'strict_fast' : 'fast',
        description: 'Дзень Вялікага посту',
      });
    }

    return days;
  }

  static generateWeeklyFasts(year) {
    const result = [];
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year, 11, 31));

    while (start <= end) {
      const day = start.getUTCDay();

      if (day === 3 || day === 5) {
        result.push({
          date: Easter.formatDate(start),
          title: 'Штотыднёвы пост (серада/пятніца)',
          type: 'fast',
          fastingLevel: 'fast',
        });
      }

      start.setUTCDate(start.getUTCDate() + 1);
    }

    return result;
  }
}
