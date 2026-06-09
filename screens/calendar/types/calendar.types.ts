export type FeastType = 'Easter' | 'GreatTwelve' | 'Great' | 'Saint' | 'None';

export type FastKind =
  | 'Lent'
  | 'Apostles'
  | 'Dormition'
  | 'Christmas'
  | 'Weekly'
  | 'Festal'
  | 'None';

export type FastLevel = 'Strict' | 'Ordinary' | 'Wine' | 'Fish' | 'Oil' | 'Hot' | 'None';

export type CalendarEvent = {
  feastName?: string;
  feastType?: FeastType;
  fastKind?: FastKind;
  fastLevel?: FastLevel;
};

/** offset - колькасць дзён адносна Пасхі */
export type MovableEvent = { offset: number; event: CalendarEvent };
export type ImmovableEvent = { date: { month: number; day: number }; event: CalendarEvent };

export type Calendar = { [date: string]: CalendarEvent };

export type Cell = null | { dayOrdinal: number; isoDate: string };

export type Grid = { year: number; month: number };
