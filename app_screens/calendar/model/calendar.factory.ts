import { calendarFasts } from '@/app_screens/calendar/model/calendar.fasts';
import { calendarFeasts } from '@/app_screens/calendar/model/calendar.feasts';

import { Calendar } from '@/app_screens/calendar/types/calendar.types';

class CalendarFactory {
  generateCalendar(year: number): Calendar {
    const calendar: Calendar = calendarFasts.getFastsCalendar(year);
    const feasts: Calendar = calendarFeasts.getFeastsCalendar(year);

    this.mergeCalendarEvents(calendar, feasts);
    console.log('Calendar\n', calendar);

    return calendar;
  }

  mergeCalendarEvents(fastEvents: Calendar, feastEvents: Calendar) {
    for (const [isoDate, feastEvent] of Object.entries(feastEvents)) {
      const fastEvent = fastEvents[isoDate];

      if (fastEvent) {
        if (feastEvent.fastLevel) {
          fastEvents[isoDate].fastKind = feastEvent.fastKind ?? 'Weekly';
          fastEvents[isoDate].fastLevel = feastEvent.fastLevel;
        } else if (feastEvent.feastType === 'GreatTwelve' && fastEvent.fastKind) {
          fastEvents[isoDate].fastLevel = 'Fish';
        }

        fastEvents[isoDate].feastType = feastEvent.feastType;
        fastEvents[isoDate].feastName = feastEvent.feastName;
      } else {
        fastEvents[isoDate] = feastEvent;
      }
    }
  }
}

export const calendarFactory = new CalendarFactory();
