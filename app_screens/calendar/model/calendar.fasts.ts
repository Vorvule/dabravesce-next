import { calendarHelper } from '@/app_screens/calendar/model/calendar.helper';
import { CalendarEvent } from '@/app_screens/calendar/model/calendar.types';

class CalendarFasts {
  /** Вяртае падзеі Вялікага посту */
  getLentFasts(year: number): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    const lentStartDate = calendarHelper.getLentStartDate(year);

    for (let i = 0; i < 48; i++) {
      const eventDate = new Date(lentStartDate);
      eventDate.setUTCDate(lentStartDate.getUTCDate() + i);
      const date: string = calendarHelper.getISODate(eventDate);
      const title: string = i === 0 ? 'Пачатак Вялікага посту' : 'Вялікі пост';
      const fastingLevel = i === 0 ? 'strict_fast' : 'fast';

      events.push({ date, title, type: 'fast', fastingLevel });
    }

    return events;
  }

  /** Вяртае пасты ў сераду і пятніцу */
  getWeeklyFasts(year: number): CalendarEvent[] {
    const weeklyFasts: CalendarEvent[] = [];
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year, 11, 31));

    while (start <= end) {
      const day: number = start.getUTCDay();
      const date: string = calendarHelper.getISODate(start);

      if (day === 3 || day === 5) {
        weeklyFasts.push({ date, title: 'Штотыднёвы пост', type: 'fast', fastingLevel: 'fast' });
      }

      start.setUTCDate(start.getUTCDate() + 1);
    }

    return weeklyFasts;
  }
}

export const calendarFasts = new CalendarFasts();
