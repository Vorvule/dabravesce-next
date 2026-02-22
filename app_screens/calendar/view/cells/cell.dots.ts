import { CalendarEvent } from '@/app_screens/calendar/types/calendar.types';

class CellDots {
  getDotColor(event: CalendarEvent) {
    if (event.feastType !== 'None') {
      switch (event.feastType) {
        case 'Easter':
          return { backgroundColor: '#C62828' };
        case 'GreatTwelve':
          return { backgroundColor: '#FFC107' };
        case 'Saints':
          return { backgroundColor: '#6A1B9A' };
      }
    }

    if (event.fastType !== 'None') {
      switch (event.fastName) {
        case 'Weekly':
          return { backgroundColor: 'teal' };
        default: // MultiDay
          return { backgroundColor: 'green' };
      }
    }
  }
}

export const cellDots = new CellDots();
