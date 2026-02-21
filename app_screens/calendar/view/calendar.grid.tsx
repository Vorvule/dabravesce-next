import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { calendarData } from '@/app_screens/calendar/model/calendar.data';
import { calendarEvents } from '@/app_screens/calendar/model/calendar.events';
import { calendarHelper } from '@/app_screens/calendar/model/calendar.helper';
import { gridCells } from '@/app_screens/calendar/view/grid/grid.cells';
import { gridHelper } from '@/app_screens/calendar/view/grid/grid.helper';

import ThemedText from '@/components/ThemedText';
import Device from '@/functions/Device';
import { Cell } from '@/app_screens/calendar/view/grid/grid.types';

export default function CalendarGrid() {
  const today = new Date();

  const firstDayOfCurrentMonth = new Date(...gridHelper.getFirstDayOfMonth(today));
  const [currentDate, setCurrentDate] = useState(firstDayOfCurrentMonth);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  // const day = today.getDate();

  const monthName = calendarHelper.getMonthName(month);
  // const monthNameGenitive = calendarHelper.getMonthName(month, true);

  const events = useMemo(() => calendarEvents.generateFullLiturgicalCalendar(year), [year]);

  const monthMatrix = useMemo(() => {
    const cells: Cell[] = [];
    gridCells.fillCalendarCells(cells, year, month, events);

    return cells;
  }, [year, month, events]);

  const goPrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const goNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <View>
      {/* Дні тыдня */}
      <View style={styles.weekRow}>
        {calendarData.DAYS_BE.map((dayName) => (
          <ThemedText type='item' key={dayName} style={styles.weekDay}>
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

          const isToday = cell.iso === calendarHelper.getISODate(today);
          const cellStyle = [styles.cell, isToday && styles.todayCell];
          const dayType = isToday ? 'today' : 'default';

          return (
            <View key={index} style={cellStyle}>
              <ThemedText type={dayType}>{cell.date.getDate()}</ThemedText>

              {cell.events.slice(0, 2).map((event, i) => (
                <View key={i} style={[styles.dot, gridCells.getDotColor(event.type)]} />
              ))}
            </View>
          );
        })}
      </View>

      {/* Навігацыя */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={goPrevMonth}>
          <ThemedText style={styles.nav}>◀</ThemedText>
        </TouchableOpacity>

        {/* Месяц і год */}
        <ThemedText type='header'>
          {monthName} {year}
        </ThemedText>

        <TouchableOpacity onPress={goNextMonth}>
          <ThemedText style={styles.nav}>▶</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
    fontSize: 18,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cell: {
    width: '14.28%',
    aspectRatio: Device.windowIsWide() ? 2 : 1,
    padding: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
  },

  todayCell: {
    // borderWidth: 2,
  },

  todayText: {
    // fontWeight: 'bold',
    // textAlign: 'left',
    // paddingTop: 3,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 2,
  },
});
