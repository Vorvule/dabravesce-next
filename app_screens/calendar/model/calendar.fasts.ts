import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { Calendar, FastLevel } from '@/app_screens/calendar/types/calendar.types';
import { FAST_TEXTS } from '@/app_screens/calendar/data/fast.texts';

class CalendarFasts {
  getEasterEvents(year: number): Calendar {
    const { lentenFastStartDate, apostlesFastStartDate } =
      calendarDates.getEasterFastsStartDate(year);

    const easterEvents: Calendar = {};

    // Lent
    for (let i = 0; i < 48; i++) {
      const isoDate = calendarDates.calculateISODate(lentenFastStartDate, i);
      const fastLevel: FastLevel = i === 0 ? 'Strict' : 'Ordinary';

      easterEvents[isoDate] = { fastKind: 'Lent', fastLevel };
    }

    // Bright Week
    for (let i = 49; i < 56; i++) {
      const isoDate = calendarDates.calculateISODate(lentenFastStartDate, i);

      easterEvents[isoDate] = { feastName: 'Светлы тыдзень', fastLevel: null };
    }

    // Trinity Week
    for (let i = 98; i < 105; i++) {
      const isoDate = calendarDates.calculateISODate(lentenFastStartDate, i);

      easterEvents[isoDate] = { feastName: 'Троіцкі суцэльны тыдзень', fastLevel: null };
    }

    // Apostles Fast
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

      events[isoDate] = { feastName: 'Yule', fastLevel: null };
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
      ...this.getEasterEvents(year),
      ...this.getDormitionFast(year),
      ...this.getChristmasEvents(year),
    };
  }
}

export const calendarFasts = new CalendarFasts();
