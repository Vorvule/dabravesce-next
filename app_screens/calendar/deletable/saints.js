import Easter from './easter.js';

class Saints {
  static getMajorSaints(year) {
    const offset = Math.floor(year / 100) - Math.floor(year / 400) - 2;

    const saints = [
      [12, 19, 'Свяціцель Мікалай Цудатворац'],
      [7, 12, 'Святыя апосталы Пётр і Павел'],
      [10, 14, 'Пакроў Прасвятой Багародзіцы'],
    ];

    return saints.map(([m, d, name]) => {
      const date = new Date(Date.UTC(year, m - 1, d));
      date.setUTCDate(date.getUTCDate() + offset);

      return {
        date: Easter.formatDate(date),
        title: name,
        type: 'saint',
      };
    });
  }
}
