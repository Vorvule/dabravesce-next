import { calendarLogic } from '@/app_screens/calendar/model/calendar.logic';
import { Calendar, FastType } from '@/app_screens/calendar/types/calendar.types';

class CalendarFasts {
  getLentenFast(year: number): Calendar {
    const events: Calendar = {};
    const lentStartDate = calendarLogic.getLentStartDate(year);

    for (let i = 0; i < 48; i++) {
      const eventDate = new Date(lentStartDate);
      eventDate.setUTCDate(lentStartDate.getUTCDate() + i);

      const date: string = calendarLogic.getISODate(eventDate);
      const fastType: FastType = i === 0 ? 'Strict' : 'Ordinary';

      events[date] = { fastName: 'Lenten', fastType };
    }

    for (let i = 49; i < 56; i++) {
      const eventDate = new Date(lentStartDate);
      eventDate.setUTCDate(lentStartDate.getUTCDate() + i);

      const date: string = calendarLogic.getISODate(eventDate);
      events[date] = { feastName: 'Bright Week', fastType: 'None' };
    }

    return events;
  }

  getChristmasFast(year: number): Calendar {
    const events: Calendar = {};
    const startDate: Date = new Date(Date.UTC(year, 10, 28));

    for (let i = 0; i < 40; i++) {
      const eventDate = new Date(startDate);
      eventDate.setUTCDate(startDate.getUTCDate() + i);

      const date: string = calendarLogic
        .getISODate(eventDate)
        .replace(String(year + 1), String(year));

      events[date] = { fastName: 'Christmas', fastType: 'Ordinary' };
    }

    for (let i = 41; i < 50; i++) {
      const eventDate = new Date(startDate);
      eventDate.setUTCDate(startDate.getUTCDate() + i);

      const date: string = calendarLogic
        .getISODate(eventDate)
        .replace(String(year + 1), String(year));

      events[date] = { feastName: 'Yule', fastType: 'None' };
    }

    return events;
  }

  getWeeklyFasts(year: number): Calendar {
    const weeklyFasts: Calendar = {};

    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year, 11, 31));

    while (start <= end) {
      const day: number = start.getUTCDay();
      const date: string = calendarLogic.getISODate(start);

      if (day === 3 || day === 5) {
        weeklyFasts[date] = { fastName: 'Weekly', fastType: 'Ordinary' }; // Штотыднёвы пост / Дзень скаромны
      }

      start.setUTCDate(start.getUTCDate() + 1);
    }

    return weeklyFasts;
  }
}

export const calendarFasts = new CalendarFasts();
