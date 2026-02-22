import { dateLogic } from '@/app_screens/calendar/logic/date.logic';
import { Cell, Grid } from '@/app_screens/calendar/types/calendar.types';

class MonthMatrix {
  getMonthMatrix(grid: Grid) {
    const cells: Cell[] = [];

    this.fillInitialEmptyCells(cells, grid);
    this.fillCellsWithDates(cells, grid);
    this.fillTrailingEmptyCells(cells);

    return cells;
  }

  /** Запаўняе матрыцу календара да першай даты */
  fillInitialEmptyCells(cells: Cell[], grid: Grid) {
    const firstDay = new Date(grid.year, grid.month, 1);
    const startOffset = dateLogic.getWeekdayMondayFirst(firstDay);

    for (let i = 0; i < startOffset; i++) cells.push(null);
  }

  /** Запаўняе матрыцу календара датамі */
  fillCellsWithDates(cells: Cell[], grid: Grid) {
    const lastDay = new Date(grid.year, grid.month + 1, 0);
    const daysInMonth = lastDay.getDate();

    for (let dayOrdinal = 1; dayOrdinal <= daysInMonth; dayOrdinal++) {
      const date = new Date(grid.year, grid.month, dayOrdinal);
      const isoDate = dateLogic.formatLocalDate(date);

      cells.push({ isoDate, dayOrdinal });
    }
  }

  /** Дапаўняе матрыцу календара да 42 ячэек (7×6) */
  fillTrailingEmptyCells(cells: Cell[]) {
    while (cells.length < 42) cells.push(null);
  }
}

export const gridMatrix = new MonthMatrix();
