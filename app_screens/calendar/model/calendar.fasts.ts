import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { Calendar, FastLevel } from '@/app_screens/calendar/types/calendar.types';
import { FAST_TEXTS } from '@/app_screens/calendar/data/fast.texts';

class CalendarFasts {
  getLent(year: number): Calendar {
    const easterEvents: Calendar = {};
    const lentStartDate = calendarDates.getStartDate(year, 'Lent');

    for (let i = 0; i < 48; i++) {
      const isoDate = calendarDates.calculateISODate(lentStartDate, i);
      const fastLevel: FastLevel = i === 0 ? 'Strict' : 'Ordinary';

      easterEvents[isoDate] = { fastKind: 'Lent', fastLevel };
    }

    return easterEvents;
  }

  getApostlesFasts(year: number): Calendar {
    const easterEvents: Calendar = {};

    const apostlesFastStartDate = calendarDates.getStartDate(year, 'Apostles');
    const apostlesFeastDate: Date = new Date(Date.UTC(year, 6, 12));

    while (apostlesFastStartDate < apostlesFeastDate) {
      const weekDayIndex: number = apostlesFastStartDate.getUTCDay();
      const isoDate: string = calendarDates.getISODate(apostlesFastStartDate);
      const fastLevel: FastLevel = FAST_TEXTS.APOSTLES_FAST_LEVELS[weekDayIndex];

      easterEvents[isoDate] = { fastKind: 'Apostles', fastLevel };
      apostlesFastStartDate.setUTCDate(apostlesFastStartDate.getUTCDate() + 1);
    }

    return easterEvents;
  }

  /**
   * Успенскі пост заўсёды прыпадае на перыяд з 14 па 27 жніўня
   * Па строгасці ён прыраўноўваецца да Вялікага посту: нельга есці рыбу, акрамя Праабражэння
   */
  getDormitionFast(year: number): Calendar {
    const events: Calendar = {};
    const dormitionFastStartDate: Date = new Date(Date.UTC(year, 7, 14));

    for (let i = 0; i < 14; i++) {
      const isoDate = calendarDates.calculateISODate(dormitionFastStartDate, i);

      events[isoDate] = { fastKind: 'Dormition', fastLevel: 'Ordinary' };
    }

    return events;
  }

  /** Рыба дазваляецца па суботах і нядзелях, а таксама ў вялікія святы
   * (напрыклад, Увядзенне Багародзіцы ў храм 4 снежня)
   * У панядзелак, сераду і пятніцу — строгі пост (нельга рыбу, віно і алей)
   * Асабліва строгім пост становіцца ў апошнія дні — з 2 па 6 студзеня
   */
  getChristmasEvents(year: number): Calendar {
    const events: Calendar = {};
    const christmasFastStartDate: Date = new Date(Date.UTC(year, 10, 28));

    // xMas Fast
    for (let i = 0; i < 40; i++) {
      const eventDate = calendarDates.calculateISODate(christmasFastStartDate, i);
      const isoDate: string = eventDate.replace(String(year + 1), String(year));

      events[isoDate] = { fastKind: 'Christmas', fastLevel: 'Ordinary' };
    }

    // Yule
    for (let i = 41; i < 50; i++) {
      const eventDate = calendarDates.calculateISODate(christmasFastStartDate, i);
      const isoDate: string = eventDate.replace(String(year + 1), String(year));

      events[isoDate] = { feastName: 'Yule', fastLevel: 'None' };
    }

    return events;
  }

  getWeeklyFasts(year: number): Calendar {
    const weeklyFasts: Calendar = {};

    const startDate = new Date(Date.UTC(year, 0, 15)); // After Yule
    const endDate = new Date(Date.UTC(year, 10, 28)); // Christmas Fast

    while (startDate < endDate) {
      const weekDayIndex: number = startDate.getUTCDay();
      const date: string = calendarDates.getISODate(startDate);

      if (weekDayIndex === 3 || weekDayIndex === 5) {
        weeklyFasts[date] = { fastKind: 'Weekly', fastLevel: 'Ordinary' };
      }

      startDate.setUTCDate(startDate.getUTCDate() + 1);
    }

    return weeklyFasts;
  }

  getFastsCalendar(year: number): Calendar {
    return {
      ...this.getWeeklyFasts(year),
      ...this.getLent(year),
      ...this.getApostlesFasts(year),
      ...this.getDormitionFast(year),
      ...this.getChristmasEvents(year),
    };
  }
}

export const calendarFasts = new CalendarFasts();
