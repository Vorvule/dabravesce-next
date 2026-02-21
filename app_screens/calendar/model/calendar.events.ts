import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';
import { calendarFasts } from '@/app_screens/calendar/model/calendar.fasts';
import { calendarFeasts } from '@/app_screens/calendar/model/calendar.feasts';
import { calendarHelper } from '@/app_screens/calendar/model/calendar.helper';

import { CalendarEvent } from '@/app_screens/calendar/model/calendar.types';

class CalendarEvents {
  generateFullLiturgicalCalendar(year: number): CalendarEvent[] {
    const easter: CalendarEvent = {
      date: calendarHelper.getISODate(calendarEaster.getOrthodoxEaster(year)),
      title: 'Пасха. Светлае Хрыстова Уваскрасенне',
      type: 'great',
      fastingLevel: 'no_fast',
    };

    const events: CalendarEvent[] = [
      easter,
      ...calendarFasts.getLentFasts(year),
      ...calendarFasts.getWeeklyFasts(year),
      ...calendarFeasts.getGreatImmovableFeasts(year),
      ...calendarFeasts.getGreatMovableFeasts(year),
      ...calendarFeasts.getMajorSaints(year),
    ];

    return events.sort((a, b) => a.date.localeCompare(b.date));
  }
}

export const calendarEvents = new CalendarEvents();
