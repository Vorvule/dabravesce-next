export type Feast = 'great' | 'twelve' | 'fast' | 'saint';

export type Fast = 'no_fast' | 'fast' | 'strict_fast' | 'wine_oil_allowed' | 'fish_allowed';

export type RawEvent = [number, number, string];
export type MovableEvent = [number, string];

export type CalendarEvent = {
  date: string; // YYYY-MM-DD
  title: string;
  type: Feast;
  fastingLevel?: Fast;
  description?: string;
};
