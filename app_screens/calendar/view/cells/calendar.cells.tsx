import { Cell } from '@/app_screens/calendar/types/calendar.types';
import CalendarCell from '@/app_screens/calendar/view/cells/calendar.cell';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import Device from '@/functions/Device';
import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';

export default function CalendarCells({ monthMatrix, selection, calendar }: any) {
  const today = new Date();
  const isoDateToday = calendarDates.getISODate(today);

  const selectedStyle = { borderColor: useThemeColor({}, 'text'), borderWidth: 1 };

  return monthMatrix.map((cell: Cell, key: number) => {
    if (cell) {
      const isSelected = cell.isoDate === selection.selectedDate;
      const isToday = cell.isoDate === isoDateToday;

      return (
        <CalendarCell
          key={key}
          onPress={() => selection.selectDate(cell.isoDate)}
          style={[styles.cell, isSelected && selectedStyle]}
          type={isToday ? 'today' : 'default'}
          day={cell.dayOrdinal}
          event={calendar[cell.isoDate]}
        />
      );
    } else {
      return <View key={key} style={styles.cell} />;
    }
  });
}

const styles = StyleSheet.create({
  cell: {
    width: '14.28%',
    aspectRatio: Device.windowIsWide() ? 2 : 1,
    padding: 4,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});
