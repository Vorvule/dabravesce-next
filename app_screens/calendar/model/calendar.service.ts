class CalendarService {
  DAYS_BE = ['Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб', 'Нд'];

  #MONTHS_BE = [
    'Студзень',
    'Люты',
    'Сакавік',
    'Красавік',
    'Май',
    'Чэрвень',
    'Ліпень',
    'Жнівень',
    'Верасень',
    'Кастрычнік',
    'Лістапад',
    'Снежань',
  ];

  getMonthName(monthIndex: number) {
    return this.#MONTHS_BE[monthIndex];
  }
}

export const calendarService = new CalendarService();
