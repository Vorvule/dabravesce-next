import { calendarData } from '@/app_screens/calendar/data/calendar.data';
import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';

class CalendarLogic {
  getMonthName(monthIndex: number, genitive: boolean = false) {
    const months = genitive ? calendarData.MONTHS_BE_GENITIVE : calendarData.MONTHS_BE;

    return months[monthIndex];
  }

  getISODate(date: Date = new Date()): string {
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

export const calendarLogic = new CalendarLogic();
