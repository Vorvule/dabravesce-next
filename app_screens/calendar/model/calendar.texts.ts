import { FastName, FastType, FeastType } from '@/app_screens/calendar/types/calendar.types';

class CalendarTexts {
  getFeastNameText(feastType: FeastType | undefined) {
    switch (feastType) {
      case 'Easter':
        return 'Пасха (Вялікдзень)';
      case 'GreatTwelve':
        return 'Вялікае дванадзесятае свята';
      case 'Saints':
        return 'Дзень шанавання святых';
      case 'None':
      default:
        return null;
    }
  }
  getFastNameText(fastName: FastName | undefined) {
    switch (fastName) {
      case 'Lenten':
        return 'Вялікі пост';
      case 'Christmas':
        return 'Калядны (Філіпаў) пост';
      // Пад забаронай мяса, малако, яйкі і сыр
      // Рыба дазваляецца па суботах і нядзелях, а таксама ў вялікія святы (напрыклад, Увядзенне Багародзіцы ў храм 4 снежня)
      // У панядзелак, сераду і пятніцу — строгі пост (нельга рыбу, віно і алей)
      // Асабліва строгім пост становіцца ў апошнія дні — з 2 па 6 студзеня
      case 'PeterAndPaul':
        return 'Пятроў (Апостальскі) пост';
      case 'Dormition':
        return 'Успенскі (Спасаўскі) пост';
      // Ён заўсёды прыпадае на перыяд з 14 па 27 жніўня (паводле праваслаўнага календара).
      // Па строгасці ён прыраўноўваецца да Вялікага посту (нельга есці рыбу, акрамя Перамянення)
      case 'Weekly':
        return 'Дзень постны';
      case undefined:
      default:
        return 'Пост адсутны\nДазваляецца любая ежа';
    }
  }

  getFastTypeText(fastType: FastType | undefined) {
    const ordinary = 'Пад забаронай мяса, малочнае і яйкі';

    switch (fastType) {
      case 'Strict':
        return 'Дзень строгага посту';
      case 'Ordinary':
        return ordinary;
      case 'Fish':
        return `Дазваляецца рыба\n${ordinary}`;
      case 'WineOil':
        return 'Дазваляюцца віно і алей';
      case 'None':
        return 'Дзень звыклы, скаромны';
      default:
        return null;
    }
  }
}

export const calendarTexts = new CalendarTexts();
