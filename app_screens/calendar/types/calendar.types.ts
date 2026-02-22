export type ImmovableEvent = [number, number, string, FastType?, FastName?];
export type MovableEvent = [number, string];

export type FeastType = 'Easter' | 'GreatTwelve' | 'Saints' | 'None';
export type FastName = 'Lenten' | 'PeterAndPaul' | 'Dormition' | 'Christmas' | 'Weekly';
export type FastType = 'Strict' | 'Ordinary' | 'Fish' | 'WineOil' | 'None';

export type CalendarEvent = {
  feastName?: string;
  feastType?: FeastType;
  fastName?: FastName;
  fastType?: FastType;
};

export type Calendar = { [date: string]: CalendarEvent };

export type Cell = null | { dayOrdinal: number; isoDate: string };

export type Grid = { year: number; month: number };
