import React from 'react';
import CalendarMonth from '@/screens/calendar/view/grid/calendar.month';
import CalendarNavigation from '@/screens/calendar/view/grid/calendar.navigation';
import CalendarWeek from '@/screens/calendar/view/grid/calendar.week';
import ThemedView from '../../../components/themed/ThemedView';

export default function CalendarGrid({ grid, selection, calendar, setDate }: any) {
  return (
    <ThemedView style={{ paddingVertical: 18 }}>
      <CalendarWeek />
      <CalendarMonth grid={grid} selection={selection} calendar={calendar} />
      <CalendarNavigation grid={grid} setDate={setDate} />
    </ThemedView>
  );
}
