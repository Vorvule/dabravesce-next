import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { churchCalendar } from '@/app_screens/calendar/model/church.calendar';
import ThemedText from '@/components/ThemedText';
import { calendarService } from '@/app_screens/calendar/model/calendar.service';

// Пераўтвараем JS weekday у фармат з панядзелкам як 0
function getWeekdayMondayFirst(date: Date) {
  const day = date.getDay(); // 0 = нядзеля
  return day === 0 ? 6 : day - 1;
}

function formatLocalDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function CalendarGrid() {
  const today = new Date();
  const todayISO = churchCalendar.formatDate(today);

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarEvents = useMemo(() => churchCalendar.generateFullLiturgicalCalendar(year), [year]);

  const monthMatrix = useMemo(() => {
    console.log(calendarEvents);
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startOffset = getWeekdayMondayFirst(firstDay);

    const cells: (null | { date: Date; iso: string; events: any[] })[] = [];

    // Пустыя ячэйкі перад 1 днём
    for (let i = 0; i < startOffset; i++) {
      cells.push(null);
    }

    // Дні месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isoFormattedDate = formatLocalDate(date);
      const events = calendarEvents.filter((event) => event.date === isoFormattedDate);

      cells.push({ date, iso: isoFormattedDate, events });
    }

    // Дапаўняем да 42 ячэек (7×6)
    while (cells.length < 42) {
      cells.push(null);
    }

    return cells;
  }, [year, month, calendarEvents]);

  const goPrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const goNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthName = calendarService.getMonthName(currentDate.getMonth());

  return (
    <View style={styles.container}>
      <ThemedText type='subtitle' style={styles.subtitle}>
        {monthName} {year}
      </ThemedText>

      {/* Дні тыдня */}
      <View style={styles.weekRow}>
        {calendarService.DAYS_BE.map((dayName) => (
          <ThemedText key={dayName} style={styles.weekDay}>
            {dayName}
          </ThemedText>
        ))}
      </View>

      {/* Сетка 7×6 */}
      <View style={styles.grid}>
        {monthMatrix.map((cell, index) => {
          if (!cell) {
            return <View key={index} style={styles.cell} />;
          }

          const isToday = cell.iso === todayISO;

          return (
            <View key={index} style={[styles.cell, isToday && styles.todayCell]}>
              <ThemedText style={[styles.dayNumber, isToday && styles.todayText]}>
                {cell.date.getDate()}
              </ThemedText>

              {cell.events.slice(0, 2).map((event, i) => (
                <View key={i} style={[styles.dot, getDotColor(event.type)]} />
              ))}
            </View>
          );
        })}
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={goPrevMonth}>
          <ThemedText style={styles.nav}>◀</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity onPress={goNextMonth}>
          <ThemedText style={styles.nav}>▶</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function getDotColor(type: string) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  subtitle: {
    paddingTop: 0,
    paddingBottom: 24,
  },

  nav: {
    fontSize: 22,
    padding: 16,
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cell: {
    width: '14.28%',
    aspectRatio: 1,
    padding: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
  },

  // emptyCell: {
  //   width: '14.28%',
  //   aspectRatio: 1,
  //   borderColor: 'gray',
  //   borderWidth: 0.5,
  // },

  todayCell: {
    backgroundColor: '#E3F2FD',
    borderColor: '#1976D2',
    borderWidth: 1,
  },

  todayText: {
    color: '#1976D2',
    fontWeight: 'bold',
  },

  dayNumber: {
    // fontSize: 14,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 2,
  },
});
