import React, { useMemo, useRef, useState } from 'react';

import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { eventDates } from '@/app_screens/calendar/logic/event.dates';
import { calendarRef } from '@/app_screens/calendar/model/calendar.ref';

import CalendarDay from '@/app_screens/calendar/view/calendar.day';
import CalendarGrid from '@/app_screens/calendar/view/calendar.grid';
import CalendarHeader from '@/app_screens/calendar/view/calendar.header';
import { Calendar, Grid } from '@/app_screens/calendar/types/calendar.types';
import { CalendarSaints } from '@/app_screens/calendar/view/calendar.saints';
import ThemedView from '@/components/ThemedView';

export default function CalendarView() {
  const [date, setDate] = useState(eventDates.getMonthFirstDate());
  const grid: Grid = { year: date.getFullYear(), month: date.getMonth() };

  const calendars: any = useRef({});
  const calendar: Calendar = useMemo(
    () => calendarRef.updateCalendar(calendars, grid.year),
    [grid.year],
  );

  const todayISODate = calendarDates.getISODate();
  const [selectedDate, setSelectedDate] = useState<string>(todayISODate);

  const [displayGrid, setDisplayGrid] = useState(false);
  const toggleDisplayGrid = () => setDisplayGrid(!displayGrid);

  const selectedCalendar: Calendar = calendars.current[eventDates.getYear(selectedDate)];
  const selectDate = (date: string) => {
    setSelectedDate(date);
    toggleDisplayGrid();
  };

  const selection = { selectedDate, selectDate };
  const event = selectedCalendar[selectedDate];

  return (
    <ThemedView>
      <CalendarHeader date={selectedDate} onPress={toggleDisplayGrid} />

      {displayGrid ? (
        <CalendarGrid grid={grid} selection={selection} calendar={calendar} setDate={setDate} />
      ) : (
        <>
          <CalendarDay event={event} />
          <CalendarSaints selectedDate={selectedDate} />
        </>
      )}
    </ThemedView>
  );
}
