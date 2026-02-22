import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Cell } from '@/app_screens/calendar/types/calendar.types';
import { gridMatrix } from '@/app_screens/calendar/logic/month.matrix';
import CalendarCells from '@/app_screens/calendar/view/cells/calendar.cells';

export default function CalendarMonth({ grid, selection, calendar }: any) {
  const monthMatrix: Cell[] = useMemo(() => gridMatrix.getMonthMatrix(grid), [grid]);

  return (
    <View style={styles.grid7x6}>
      <CalendarCells monthMatrix={monthMatrix} selection={selection} calendar={calendar} />
    </View>
  );
}

const styles = StyleSheet.create({
  grid7x6: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
