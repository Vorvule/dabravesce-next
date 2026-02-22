import { calendarData } from '@/app_screens/calendar/data/calendar.data';

class DateLogic {
  /** Вяртае індэкс дня тыдня, у якім 0 - індэкс панядзелка (не нядзелі) */
  getWeekdayMondayFirst(date: Date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  }

  formatLocalDate(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  getMonthFirstDate(date: Date = new Date()): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  getSelectedDayAndMonth(ISODate: string) {
    const [year, month, day] = ISODate.split('-');
    const monthNameGenitive = calendarData.MONTHS_BE_GENITIVE[+month - 1];

    return `${+day} ${monthNameGenitive} ${year}`;
  }

  getYear(ISODate: string) {
    return ISODate.split('-')[0];
  }
}

export const dateLogic = new DateLogic();
