import { calendarData } from '@/app_screens/calendar/model/calendar.data';
import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';

class CalendarHelper {
  getMonthName(monthIndex: number, genitive: boolean = false) {
    const months = genitive ? calendarData.MONTHS_BE_GENETIVE : calendarData.MONTHS_BE;

    return months[monthIndex];
  }

  getISODate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getJulianOffset(year: number): number {
    return Math.floor(year / 100) - Math.floor(year / 400) - 2;
  }

  getLentStartDate(year: number): Date {
    const easter: Date = calendarEaster.getOrthodoxEaster(year);
    const date = new Date(easter);
    date.setUTCDate(date.getUTCDate() - 48);

    return date;
  }
}

export const calendarHelper = new CalendarHelper();
