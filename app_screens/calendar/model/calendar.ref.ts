import { calendarFactory } from '@/app_screens/calendar/model/calendar.factory';

class CalendarRef {
  updateCalendar(calendars: any, year: number) {
    if (!calendars.current[year]) {
      calendars.current[year] = calendarFactory.generateCalendar(year);
    }

    return calendars.current[year];
  }
}

export const calendarRef = new CalendarRef();
