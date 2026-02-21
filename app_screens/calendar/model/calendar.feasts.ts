import { calendarData } from '@/app_screens/calendar/model/calendar.data';
import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';
import { calendarHelper } from '@/app_screens/calendar/model/calendar.helper';
import { CalendarEvent, MovableEvent, RawEvent } from '@/app_screens/calendar/model/calendar.types';

class CalendarFeasts {
  /** Вяртае нерухомыя святы */
  getGreatImmovableFeasts(year: number): CalendarEvent[] {
    return calendarData.IMMOVABLE_FEASTS.map(([month, day, title]: RawEvent): CalendarEvent => {
      const feastDate = Date.UTC(year, month - 1, day);
      const date = calendarHelper.getISODate(new Date(feastDate));

      return { date, title, type: 'twelve', fastingLevel: 'no_fast' };
    });
  }

  /** Вяртае рухомыя святы */
  getGreatMovableFeasts(year: number): CalendarEvent[] {
    const easter: Date = calendarEaster.getOrthodoxEaster(year);

    return calendarData.MOVABLE_FEASTS.map(([offset, title]: MovableEvent): CalendarEvent => {
      const easterDate = new Date(easter);
      easterDate.setUTCDate(easterDate.getUTCDate() + offset);
      const date = calendarHelper.getISODate(easterDate);

      return { date, title, type: 'twelve' };
    });
  }

  /** Вяртае дні памяці святых і Багародзіцы */
  getMajorSaints(year: number): CalendarEvent[] {
    return calendarData.SAINTS.map(([month, day, name]: RawEvent): CalendarEvent => {
      const saintDate = new Date(Date.UTC(year, +month - 1, +day));
      const date: string = calendarHelper.getISODate(saintDate);

      return { date, title: name, type: 'saint' };
    });
  }
}

export const calendarFeasts = new CalendarFeasts();
