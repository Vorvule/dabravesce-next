import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { Calendar, FeastType } from '@/app_screens/calendar/types/calendar.types';
import { easterProvider } from '@/app_screens/calendar/logic/easter.provider';

class CalendarEaster {
  getEasterFeasts(year: number): Calendar {
    const easterEvents: Calendar = {};

    const easterDate: Date = easterProvider.getOrthodoxEaster(year);
    const easterISODate = calendarDates.getISODate(easterDate);

    // Easter Day
    const feastName = 'Пасха (Вялікдзень),\nСветлае Хрыстова Уваскрасенне';
    const feastType: FeastType = 'Easter';

    easterEvents[easterISODate] = { feastName, feastType };

    // Bright Week
    for (let i = 1; i < 8; i++) {
      const isoDate = calendarDates.calculateISODate(easterDate, i);
      const feastName = 'Светлы тыдзень';

      easterEvents[isoDate] = { feastName, feastType: 'None', fastKind: 'None', fastLevel: 'None' };
    }

    // Trinity Week
    for (let i = 50; i < 57; i++) {
      const isoDate = calendarDates.calculateISODate(easterDate, i);
      const feastName = 'Троіцкі суцэльны тыдзень';

      easterEvents[isoDate] = { feastName, feastType: 'None', fastKind: 'None', fastLevel: 'None' };
    }

    return easterEvents;
  }
}

export const calendarEaster = new CalendarEaster();
