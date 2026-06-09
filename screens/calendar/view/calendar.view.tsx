import { type Dispatch, type SetStateAction, useMemo, useState } from 'react';

import { eventDates } from '@/screens/calendar/logic/event.dates';
import { calendarRef } from '@/screens/calendar/model/calendar.ref';

import CalendarDay from '@/screens/calendar/view/calendar.day';
import CalendarGrid from '@/screens/calendar/view/calendar.grid';
import { Grid } from '@/screens/calendar/types/calendar.types';
import ThemedView from '@/components/themed/ThemedView';
import { CalendarSaints } from './calendar.saints';

type Props = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

export default function CalendarView({ selectedDate, setSelectedDate }: Props) {
  const [date, setDate] = useState(eventDates.getMonthFirstDate());
  const grid: Grid = { year: date.getFullYear(), month: date.getMonth() };

  const calendar = useMemo(
    () => calendarRef.updateCalendar(grid.year),
    [grid.year],
  );

  const selectedCalendar = useMemo(
    () => calendarRef.updateCalendar(eventDates.getYear(selectedDate)),
    [selectedDate],
  );

  const selection = { selectedDate, setSelectedDate };
  const event = selectedCalendar[selectedDate];

  return (
    <ThemedView>
      <CalendarGrid grid={grid} selection={selection} calendar={calendar} setDate={setDate} />
      <CalendarDay event={event} />
      <CalendarSaints selectedDate={selectedDate} />
    </ThemedView>
  );
}
