import { CalendarEvent } from '@/app_screens/calendar/types/calendar.types';

class CellDots {
  getDotColor(event: CalendarEvent) {
    if (event.feastType) {
      switch (event.feastType) {
        case 'Easter':
          return { backgroundColor: '#C62828' };
        case 'GreatTwelve':
          return { backgroundColor: '#FFC107' };
        case 'Great':
          return { backgroundColor: '#6A1B9A' };
        default:
          console.warn(`Unknown feast kind ${event.feastType}!`);
      }
    }

    if (event.fastLevel) {
      switch (event.fastKind) {
        case 'Weekly':
          return { backgroundColor: 'teal' };
        // Multiday fast
        default:
          return { backgroundColor: 'green' };
      }
    }
  }
}

export const cellDots = new CellDots();
