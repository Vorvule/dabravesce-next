import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';
import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { FEAST_SOURCES } from '@/app_screens/calendar/data/feast.sources';
import {
  Calendar,
  ImmovableEvent,
  MovableEvent,
} from '@/app_screens/calendar/types/calendar.types';

class CalendarFeasts {
  /** Вяртае рухомыя святы */
  getGreatMovableFeasts(year: number): Calendar {
    const easter: Date = calendarEaster.getOrthodoxEaster(year);
    const events: Calendar = {};

    FEAST_SOURCES.GREAT_12_MOVABLE_FEASTS.forEach(({ offset, event }: MovableEvent) => {
      const easterDate = new Date(easter);

      easterDate.setUTCDate(easterDate.getUTCDate() + offset);
      const isoDate = calendarDates.getISODate(easterDate);

      events[isoDate] = { ...event, feastType: 'GreatTwelve' };
    });

    return events;
  }

  /** Вяртае нерухомыя святы */
  getGreatImmovableFeasts(year: number): Calendar {
    const events: Calendar = {};

    FEAST_SOURCES.GREAT_12_IMMOVABLE_FEASTS.forEach(({ date, event }: ImmovableEvent) => {
      const feastDate = Date.UTC(year, date.month - 1, date.day);
      const isoDate = calendarDates.getISODate(new Date(feastDate));

      events[isoDate] = { ...event, feastType: 'GreatTwelve' };
    });

    return events;
  }

  /** Вяртае дні памяці святых і Багародзіцы */
  getGreatFeasts(year: number): Calendar {
    const events: Calendar = {};

    FEAST_SOURCES.GREAT_FEASTS.forEach(({ date, event }: ImmovableEvent) => {
      const feastDate = new Date(Date.UTC(year, date.month - 1, date.day));
      const isoDate = calendarDates.getISODate(feastDate);

      events[isoDate] = { ...event, feastType: 'Great' };
    });

    return events;
  }

  getFeastsCalendar(year: number): Calendar {
    return {
      ...this.getGreatFeasts(year),
      ...this.getGreatImmovableFeasts(year),
      ...this.getGreatMovableFeasts(year),
      ...calendarEaster.getEasterItem(year),
    };
  }
}

export const calendarFeasts = new CalendarFeasts();
