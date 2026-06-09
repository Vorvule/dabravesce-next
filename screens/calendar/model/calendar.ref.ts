import { Calendar } from '@/screens/calendar/types/calendar.types';
import { calendarFactory } from '@/screens/calendar/model/calendar.factory';

class CalendarRef {
  private cache: Record<number, Calendar> = {};

  updateCalendar(year: number): Calendar {
    if (!this.cache[year]) {
      this.cache[year] = calendarFactory.generateCalendar(year);
    }

    return this.cache[year];
  }
}

export const calendarRef = new CalendarRef();
