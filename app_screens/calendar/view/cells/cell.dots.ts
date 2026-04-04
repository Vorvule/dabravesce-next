import { CalendarEvent } from '@/app_screens/calendar/types/calendar.types';

class CellDots {
  FEAST_DOT_STYLES: any = {
    Easter: { backgroundColor: '#C62828' },
    GreatTwelve: { backgroundColor: '#FFC107' },
    Great: { backgroundColor: '#6A1B9A' },
  };

  getDotColor(event: CalendarEvent) {
    if (event?.feastType) {
      return this.FEAST_DOT_STYLES[event.feastType];
    }

    switch (event.fastKind) {
      case 'None':
      case 'Festal':
        return null;
      case 'Weekly':
        return { backgroundColor: 'teal' };
      // Multiday fast
      default:
        return { backgroundColor: 'green' };
    }
  }
}

export const cellDots = new CellDots();
