import { Cell } from '@/app_screens/calendar/types/calendar.types';
import CalendarCell from '@/app_screens/calendar/view/cells/calendar.cell';
import { StyleSheet } from 'react-native';
import React from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import Device from '@/functions/Device';
import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';

export default function CalendarCells({ monthMatrix, selection, calendar }: any) {
  const today = new Date();
  const isoDateToday = calendarDates.getISODate(today);

  const borderColor= useThemeColor({}, 'text');
  const selectedStyle = { borderColor, borderWidth: 1 };

  return monthMatrix.map((cell: Cell, key: number) => {
    if (!cell){
      return (
        <ThemedView key={key} style={styles.cell} >
          <ThemedText> </ThemedText>
        </ThemedView>);
    }

    const isSelected = cell.isoDate === selection.selectedDate;
    const isToday = cell.isoDate === isoDateToday;

    const cellStyle = isSelected
      ? { ...styles.cell, ...selectedStyle }
      : styles.cell;

    return (
      <CalendarCell
        key={key}
        onPress={() => selection.selectDate(cell.isoDate)}
        style={cellStyle}
        type={isToday ? 'today' : 'default'}
        day={cell.dayOrdinal}
        event={calendar[cell.isoDate]}
      />
    );
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
