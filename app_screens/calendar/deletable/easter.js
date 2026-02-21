export class Easter {
  getOrthodoxEaster(year) {
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;

    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;

    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;

    const julian = new Date(Date.UTC(year, month - 1, day));
    const offset = Math.floor(year / 100) - Math.floor(year / 400) - 2;
    julian.setUTCDate(julian.getUTCDate() + offset);

    return julian;
  }

  formatDate(d) {
    return d.toISOString().split('T')[0];
  }
}
