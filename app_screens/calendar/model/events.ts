import { calendarEvents } from '@/app_screens/calendar/model/calendar.events';

class Events {
  setCalendars(calendars: any, year: number) {
    if (!calendars.current[year]) {
      calendars.current[year] = calendarEvents.generateCalendar(year);
    }

    return calendars.current[year];
  }
}

export const events = new Events();
