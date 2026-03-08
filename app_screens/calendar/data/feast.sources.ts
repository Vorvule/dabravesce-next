import { ImmovableEvent, MovableEvent } from '@/app_screens/calendar/types/calendar.types';

class FeastSources {
  GREAT_12_MOVABLE_FEASTS: MovableEvent[] = [
    {
      offset: -7,
      event: {
        feastName: 'Уваход Гасподні ў Іерусалім,\nВербная нядзеля',
        fastKind: 'Lent',
        fastLevel: 'Fish',
      },
    },
    { offset: 39, event: { feastName: 'Узнясенне Гасподняе' } },
    { offset: 49, event: { feastName: 'Дзень Святой Троіцы,\nПяцідзесятніца' } },
  ];

  #christTitle = 'Госпада Бога і Спасіцеля нашага Іісуса Хрыста';
  #virginTitle = 'Прасвятой Уладычыцы нашай Багародзіцы і Вечнадзевы Марыі';

  GREAT_12_IMMOVABLE_FEASTS: ImmovableEvent[] = [
    {
      date: { month: 1, day: 7 },
      event: { feastName: `Ражджаство ${this.#christTitle}` },
    },
    {
      date: { month: 1, day: 19 },
      event: {
        feastName: 'Святое Богаяўленне,\n' + `Хрышчэнне ${this.#christTitle}`,
      },
    },
    {
      date: { month: 2, day: 15 },
      event: { feastName: 'Стрэчанне Госпада Бога і Спасіцеля нашага Іісуса Хрыста' },
    },
    {
      date: { month: 4, day: 7 },
      event: { feastName: 'Благавешчанне', fastKind: 'Lent', fastLevel: 'Oil' },
    },
    {
      date: { month: 8, day: 19 },
      event: {
        feastName: 'Праабражэнне Госпада Бога і Спасіцеля нашага Іісуса Хрыста',
        fastLevel: 'Fish',
      },
    },
    {
      date: { month: 8, day: 28 },
      event: { feastName: `Успенне ${this.#virginTitle}`, fastKind: 'Festal', fastLevel: 'Fish' },
    },
    {
      date: { month: 9, day: 21 },
      event: { feastName: `Нараджэнне ${this.#virginTitle}` },
    },
    {
      date: { month: 9, day: 27 },
      event: {
        feastName: 'Уздзвіжанне пачэснага і жыватворнага Крыжа Гасподняга',
        fastKind: 'Festal',
        fastLevel: 'Ordinary',
      },
    },
    {
      date: { month: 12, day: 4 },
      event: {
        feastName: `Увядзенне ў храм ${this.#virginTitle}`,
        fastKind: 'Christmas',
        fastLevel: 'Fish',
      },
    },
  ];

  #baptistTitle = 'Прарока, Прадцечы і Хрысціцеля Гасподняга Іаана';

  GREAT_FEASTS: ImmovableEvent[] = [
    {
      date: { month: 1, day: 14 },
      event: {
        feastName:
          'Абрэзанне Гасподняе.\nСвяціцеля Васілія Вялікага, архіепіскапа Кесарыі Кападакійскай',
        fastKind: 'None',
      },
    },
    {
      date: { month: 7, day: 7 },
      event: { feastName: `Нараджэнне слаўнага ${this.#baptistTitle}` },
    },
    {
      date: { month: 7, day: 12 },
      event: { feastName: 'Слаўных і ўсяхвальных першавярхоўных апосталаў Пятра і Паўла' },
    },
    {
      date: { month: 9, day: 11 },
      event: { feastName: `Усекнавенне галавы ${this.#baptistTitle}`, fastLevel: 'Ordinary' },
    },
    {
      date: { month: 10, day: 14 },
      event: { feastName: 'Пакроў Прасвятой Багародзіцы', fastLevel: 'Fish' },
    },
    {
      date: { month: 12, day: 19 },
      event: { feastName: 'Свяціцеля Мікалая, архіепіскапа Мір Лікійскіх, цудатворца' },
    },
  ];
}

export const FEAST_SOURCES = new FeastSources();
