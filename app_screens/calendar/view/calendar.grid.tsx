import React from 'react';
import CalendarMonth from '@/app_screens/calendar/view/grid/calendar.month';
import CalendarNavigation from '@/app_screens/calendar/view/grid/calendar.navigation';
import CalendarWeek from '@/app_screens/calendar/view/grid/calendar.week';

export default function CalendarGrid({ grid, selection, calendar, setDate }: any) {
  return (
    <>
      <CalendarWeek />
      <CalendarMonth grid={grid} selection={selection} calendar={calendar} />
      <CalendarNavigation grid={grid} setDate={setDate} />
    </>
  );
}
