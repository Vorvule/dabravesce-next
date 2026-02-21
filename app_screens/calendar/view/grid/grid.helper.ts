class GridHelper {
  /** Вяртае індэкс дня тыдня, у якім 0 - індэкс панядзелка (а не нядзелі) */
  getWeekdayMondayFirst(date: Date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
  }

  formatLocalDate(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  getFirstDayOfMonth(date: Date): [number, number, number] {
    return [date.getFullYear(), date.getMonth(), 1];
  }
}

export const gridHelper = new GridHelper();
