export default class Daily {
  static getDailyKeychain(): number[] {
    const zeroBasedDayOfYearIndex: number = this.getDayOfTheYearIndex();

    if (zeroBasedDayOfYearIndex < 358) {
      const modulus = zeroBasedDayOfYearIndex % 89;
      switch (true) {
        case modulus < 28:
          return [0, 0, modulus];
        case modulus > 27 && modulus < 44:
          return [0, 1, modulus - 28];
        case modulus > 43 && modulus < 68:
          return [0, 2, modulus - 44];
        case modulus > 67:
          return [0, 3, modulus - 68];
        default:
          return [0, 0, 0];
      }
    } else {
      return [0, 2, 0]; // [albumIndex, bookIndex, chapterIndex]
    }
    // indexes 0-355 = 356 Days = 89 Gospel chapters x 4 Times
    // indexes 356, 357 = Matthew 1, 2 = fit for Christmas reading
    // indexes 358/359 = Christmas Eve/Christmas = Luke, 1 till EOY
  }

  static getDayOfTheYearIndex() {
    const currentDay: Date = new Date();
    const startOfYear: Date = new Date(currentDay.getFullYear(), 0, 0);

    // To milliseconds:
    const daysOffset: number = currentDay.getTime() - startOfYear.getTime();
    const oneDay: number = 86_400_000; // 1000 * 60 * 60 * 24

    // Zero based day of the year
    return Math.floor(daysOffset / oneDay) - 1;
  }
}
