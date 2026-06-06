import React, { useMemo, useState } from 'react';

import { calendarDates } from '@/app_screens/calendar/model/calendar.dates';
import { eventDates } from '@/app_screens/calendar/logic/event.dates';
import { calendarRef } from '@/app_screens/calendar/model/calendar.ref';

import CalendarDay from '@/app_screens/calendar/view/calendar.day';
import CalendarGrid from '@/app_screens/calendar/view/calendar.grid';
import { Grid } from '@/app_screens/calendar/types/calendar.types';
import { CalendarSaints } from '@/app_screens/calendar/view/calendar.saints';
import ThemedView from '@/components/ThemedView';
import ThemedText from '../../../components/ThemedText';

export default function CalendarView() {
  const [date, setDate] = useState(eventDates.getMonthFirstDate());
  const grid: Grid = { year: date.getFullYear(), month: date.getMonth() };

  const calendar = useMemo(
    () => calendarRef.updateCalendar(grid.year),
    [grid.year],
  );

  const todayISODate = calendarDates.getISODate();
  const [selectedDate, setSelectedDate] = useState<string>(todayISODate);

  const selectedCalendar = useMemo(
    () => calendarRef.updateCalendar(eventDates.getYear(selectedDate)),
    [selectedDate],
  );
  const selectDate = (date: string) => { setSelectedDate(date); };

  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);
  const selection = { selectedDate, selectDate };
  const event = selectedCalendar[selectedDate];

  return (
    <ThemedView>
      <CalendarGrid grid={grid} selection={selection} calendar={calendar} setDate={setDate} />

      <ThemedText type="subtitle" style={{ textAlign: 'center' }}>{dayMonth}</ThemedText>

      <CalendarDay event={event} />
      <CalendarSaints selectedDate={selectedDate} />
    </ThemedView>
  );
}
