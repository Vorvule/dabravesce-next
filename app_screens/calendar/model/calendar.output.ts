import { FastKind, FastLevel } from '@/app_screens/calendar/types/calendar.types';
import { FAST_TEXTS } from '@/app_screens/calendar/data/fast.texts';

class CalendarOutput {
  getFastNameText(fastKind: FastKind | undefined) {
    return FAST_TEXTS.FAST_NAMES[fastKind || 'None'];
  }

  getFastTypeText(fastLevel: FastLevel | undefined) {
    return FAST_TEXTS.FAST_LEVELS[fastLevel || 'None'];
  }
}

export const calendarOutput = new CalendarOutput();
