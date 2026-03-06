import { DATE_NAMES } from '@/app_screens/calendar/data/date.names';
import { calendarEaster } from '@/app_screens/calendar/model/calendar.easter';

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
  getEasterFastsStartDate(year: number) {
    const easter: Date = calendarEaster.getOrthodoxEaster(year);

    const lentenFastStartDate = new Date(easter);
    lentenFastStartDate.setUTCDate(lentenFastStartDate.getUTCDate() - 48);

    const apostlesFastStartDate = new Date(easter);
    apostlesFastStartDate.setUTCDate(apostlesFastStartDate.getUTCDate() + 57);

    return { lentenFastStartDate, apostlesFastStartDate };
  }
}

export const calendarDates = new CalendarDates();
