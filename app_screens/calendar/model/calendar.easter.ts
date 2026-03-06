import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { Calendar, FeastType } from '@/app_screens/calendar/types/calendar.types';

class CalendarEaster {
  /** For determining the Easter, the Meeus/Jones/Butcher algorithm is used */
  getOrthodoxEaster(year: number): Date {
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;

    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;

    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;

    const julian = new Date(Date.UTC(year, month - 1, day));
    julian.setUTCDate(julian.getUTCDate() + calendarDates.getJulianOffset(2026));

    return julian;
  }

  getEasterItem(year: number): Calendar {
    const easter = this.getOrthodoxEaster(year);
    const date = calendarDates.getISODate(easter);

    const feastName = 'Пасха (Вялікдзень).\nСветлае Хрыстова Уваскрасенне';
    const feastType: FeastType = 'Easter';

    return { [date]: { feastName, feastType } };
  }
}

export const calendarEaster = new CalendarEaster();
