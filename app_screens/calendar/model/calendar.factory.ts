import { calendarFasts } from '@/app_screens/calendar/model/calendar.fasts';
import { calendarFeasts } from '@/app_screens/calendar/model/calendar.feasts';

import { Calendar, CalendarEvent } from '@/app_screens/calendar/types/calendar.types';

class CalendarFactory {
  generateCalendar(year: number): Calendar {
    const calendar: Calendar = calendarFeasts.getFeastsCalendar(year);
    const fasts: Calendar = calendarFasts.getFastsCalendar(year);

    this.joinCalendarEvents(calendar, fasts);
    console.log('Calendar\n', calendar);

    return calendar;
  }

  joinCalendarEvents(generalCalendar: Calendar, fastEvents: Calendar) {
    for (const [isoDate, fastEvent] of Object.entries(fastEvents)) {
      const feastEvent: CalendarEvent = generalCalendar[isoDate];

      if (feastEvent) {
        generalCalendar[isoDate].fastKind ||= fastEvent.fastKind;
        generalCalendar[isoDate].fastLevel ||= fastEvent.fastLevel;
      } else {
        generalCalendar[isoDate] = {
          fastKind: fastEvent.fastKind || 'None',
          fastLevel: fastEvent.fastLevel || 'None',
        };
      }
    }
  }
}

export const calendarFactory = new CalendarFactory();
