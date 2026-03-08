import { FastLevel } from '@/app_screens/calendar/types/calendar.types';

class FastTexts {
  FAST_NAMES = {
    Lent: 'Вялікі пост',
    Apostles: 'Пятроў (Апостальскі) пост',
    Dormition: 'Успенскі (Спасаўскі) пост',
    Christmas: 'Калядны (Філіпаў) пост',
    Weekly: 'Штотыднёвы пост',
    Festal: 'Дзень постны',
    None: 'Пост адсутны',
  };

  #ordinary = 'Забараняюцца мяса, малочнае і яйкі';

  FAST_LEVELS = {
    Strict: 'Дзень строгага ўстрымання',
    Ordinary: `${this.#ordinary}`,
    Wine: `Дазваляюцца рыба і віно\n${this.#ordinary}`,
    Fish: `Падчас ежы дазваляецца рыба\n${this.#ordinary}`,
    Oil: `Дазваляецца гарачая ежа з алеем\n${this.#ordinary}`,
    Hot: `Дазваляецца гарачая ежа без алею\n${this.#ordinary}`,
    None: 'Дазваляецца любая ежа',
  };

  /** Zero based week (Sunday..Saturday) Apostles fast levels */
  APOSTLES_FAST_LEVELS: FastLevel[] = [
    'Wine',
    'Hot',
    'Fish',
    'Ordinary',
    'Fish',
    'Ordinary',
    'Wine',
  ];
}

export const FAST_TEXTS = new FastTexts();
