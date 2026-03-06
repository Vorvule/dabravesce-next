import { calendarFactory } from '@/app_screens/calendar/model/calendar.factory';

class CalendarEvents {
  updateRefAndGetCalendar(calendars: any, year: number) {
    if (!calendars.current[year]) {
      calendars.current[year] = calendarFactory.generateCalendar(year);
    }

    return calendars.current[year];
  }
}

export const calendarEvents = new CalendarEvents();
