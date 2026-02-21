import { gridHelper } from '@/app_screens/calendar/view/grid/grid.helper';
import { Cell } from '@/app_screens/calendar/view/grid/grid.types';

class GridCells {
  fillCalendarCells(cells: Cell[], year: number, monthIndex: number, events: any) {
    this.fillInitialEmptyCells(cells, year, monthIndex);
    this.fillCellsWithDates(cells, year, monthIndex, events);
    this.fillTrailingEmptyCells(cells);
  }

  /** Запаўняе матрыцу календара да першай даты */
  fillInitialEmptyCells(cells: Cell[], year: number, monthIndex: number) {
    const firstDay = new Date(year, monthIndex, 1);
    const startOffset = gridHelper.getWeekdayMondayFirst(firstDay);

    for (let i = 0; i < startOffset; i++) {
      cells.push(null);
    }
  }

  /** Запаўняе матрыцу календара датамі */
  fillCellsWithDates(cells: Cell[], year: number, monthIndex: number, events: any) {
    const lastDay = new Date(year, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day);
      const ISODate = gridHelper.formatLocalDate(date);
      const dateEvents = events.filter((event: any) => event.date === ISODate);

      cells.push({ date, iso: ISODate, events: dateEvents });
    }
  }

  /** Дапаўняе матрыцу календара да 42 ячэек (7×6) */
  fillTrailingEmptyCells(cells: Cell[]) {
    while (cells.length < 42) {
      cells.push(null);
    }
  }

  getDotColor(type: string) {
    switch (type) {
      case 'great':
        return { backgroundColor: '#C62828' };
      case 'twelve':
        return { backgroundColor: '#AD8B00' };
      case 'fast':
        return { backgroundColor: '#6A1B9A' };
      case 'saint':
        return { backgroundColor: '#1565C0' };
      default:
        return { backgroundColor: '#999' };
    }
  }
}

export const gridCells = new GridCells();
