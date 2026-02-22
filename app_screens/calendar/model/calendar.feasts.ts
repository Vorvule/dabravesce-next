import { calendarData } from '@/app_screens/calendar/data/calendar.data';
import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';
import { calendarLogic } from '@/app_screens/calendar/model/calendar.logic';
import {
  Calendar,
  ImmovableEvent,
  MovableEvent,
} from '@/app_screens/calendar/types/calendar.types';

class CalendarFeasts {
  /** Вяртае нерухомыя святы */
  getGreatImmovableFeasts(year: number): Calendar {
    const events: Calendar = {};

    calendarData.IMMOVABLE_FEASTS.forEach(
      ([month, day, feastName, fastType, fastName]: ImmovableEvent) => {
        const feastDate = Date.UTC(year, month - 1, day);
        const date = calendarLogic.getISODate(new Date(feastDate));

        events[date] = {
          feastName,
          feastType: 'GreatTwelve',
          ...(fastName && { fastName }),
          ...(fastType && { fastType }),
        };
      }
    );

    return events;
  }

  /** Вяртае рухомыя святы */
  getGreatMovableFeastsIndex(year: number): Calendar {
    const easter: Date = calendarEaster.getOrthodoxEaster(year);
    const events: Calendar = {};

    calendarData.MOVABLE_FEASTS.forEach(([offset, feastName]: MovableEvent) => {
      const easterDate = new Date(easter);
      easterDate.setUTCDate(easterDate.getUTCDate() + offset);
      const date = calendarLogic.getISODate(easterDate);

      events[date] = { feastName, feastType: 'GreatTwelve' };
    });

    return events;
  }

  // Todo: Add saints to Calendar
  /** Вяртае дні памяці святых і Багародзіцы */
  getMajorSaints(year: number): Calendar {
    const events: Calendar = {};

    calendarData.SAINTS.forEach(([month, day, feastName]: ImmovableEvent) => {
      const saintDate = new Date(Date.UTC(year, +month - 1, +day));
      const date: string = calendarLogic.getISODate(saintDate);

      events[date] = { feastName, feastType: 'Saints' };
    });

    return events;
  }
}

export const calendarFeasts = new CalendarFeasts();
