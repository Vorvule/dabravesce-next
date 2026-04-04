import { DATE_NAMES } from '@/app_screens/calendar/data/date.names';
import { FastKind } from '@/app_screens/calendar/types/calendar.types';
import { easterProvider } from '@/app_screens/calendar/logic/easter.provider';

class CalendarDates {
  getMonthName(monthIndex: number, genitive: boolean = false) {
    const monthNames = genitive ? DATE_NAMES.MONTHS_BE_GENITIVE : DATE_NAMES.MONTHS_BE;

    return monthNames[monthIndex];
  }

  getISODate(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
  }

  calculateISODate(startDate: Date, i: number) {
    const eventDate = new Date(startDate);
    eventDate.setUTCDate(startDate.getUTCDate() + i);

    return calendarDates.getISODate(eventDate);
  }

  getJulianOffset(year: number): number {
    return Math.floor(year / 100) - Math.floor(year / 400) - 2;
  }

  /**
   * Lent starts 48 days before Easter
   * Apostles fast starts on the second next Monday after the Holy Trinity day and lasts 8..42 days
   */
  getStartDate(year: number, fastKind: FastKind) {
    const EASTER_OFFSETS: any = { Lent: -48, Apostles: 57 };
    const easterOffset: number = EASTER_OFFSETS[fastKind];

    const easter: Date = easterProvider.getOrthodoxEaster(year);
    const startDate = new Date(easter);

    startDate.setUTCDate(startDate.getUTCDate() + easterOffset);

    return startDate;
  }
}

export const calendarDates = new CalendarDates();
