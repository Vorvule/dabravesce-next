import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';
import { calendarFasts } from '@/app_screens/calendar/model/calendar.fasts';
import { calendarFeasts } from '@/app_screens/calendar/model/calendar.feasts';

import { Calendar } from '@/app_screens/calendar/types/calendar.types';

class CalendarEvents {
  setCalendars(calendars: any, year: number) {
    if (!calendars.current[year]) {
      calendars.current[year] = calendarEvents.generateCalendar(year);
    }

    return calendars.current[year];
  }

  generateCalendar(year: number): Calendar {
    const calendar: Calendar = {
      ...calendarFasts.getWeeklyFasts(year),
      ...calendarFasts.getLentenFast(year),
      ...calendarFasts.getChristmasFast(year),
    };

    const feasts = {
      ...calendarFeasts.getGreatImmovableFeasts(year),
      ...calendarFeasts.getGreatMovableFeastsIndex(year),
      ...calendarEaster.getEasterItem(year),
    };

    this.mergeCalendarEvents(calendar, feasts);
    console.log('Calendar\n', calendar);

    return calendar;
  }

  mergeCalendarEvents(aggregator: Calendar, calendar: Calendar) {
    for (const [key, value] of Object.entries(calendar)) {
      if (aggregator[key] && !(value.feastType === 'Easter' || value.feastType === 'GreatTwelve')) {
        aggregator[key] = { ...aggregator[key], ...value };
      } else {
        aggregator[key] = value;
      }
    }
  }
}

export const calendarEvents = new CalendarEvents();
