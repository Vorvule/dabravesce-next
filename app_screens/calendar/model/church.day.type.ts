export type ChurchDay = {
  date: string; // YYYY-MM-DD
  title: string;
  type: 'great' | 'twelve' | 'fast' | 'saint' | 'period' | 'ordinary';
  fastingLevel?:
    | 'no_fast'
    | 'fast'
    | 'strict_fast'
    | 'wine_oil_allowed'
    | 'fish_allowed';
  description?: string;
};
