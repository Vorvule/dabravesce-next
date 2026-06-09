import { FastKind } from '@/screens/calendar/types/calendar.types';
import { easterProvider } from '@/screens/calendar/logic/easter.provider';

class CalendarDates {
  getISODate(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
  }

  calculateISODate(startDate: Date, i: number) {
    const eventDate = new Date(startDate);
    eventDate.setUTCDate(startDate.getUTCDate() + i);

    return calendarDates.getISODate(eventDate);
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
