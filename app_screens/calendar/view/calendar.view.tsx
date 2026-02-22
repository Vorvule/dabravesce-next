import React, { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { calendarLogic } from '@/app_screens/calendar/model/calendar.logic';
import { dateLogic } from '@/app_screens/calendar/logic/date.logic';
import { events } from '@/app_screens/calendar/model/events';
import CalendarDay from '@/app_screens/calendar/view/calendar.day';
import CalendarGrid from '@/app_screens/calendar/view/calendar.grid';
import CalendarHeader from '@/app_screens/calendar/view/calendar.header';
import { Calendar, Grid } from '@/app_screens/calendar/types/calendar.types';

export default function CalendarView() {
  const [date, setDate] = useState(dateLogic.getMonthFirstDate());
  const grid: Grid = { year: date.getFullYear(), month: date.getMonth() };

  const calendars: any = useRef({});
  const calendar: Calendar = useMemo(() => events.setCalendars(calendars, grid.year), [grid.year]);
  console.log('Calendars', calendars);

  const todayISODate = calendarLogic.getISODate();
  const [selectedDate, setSelectedDate] = useState<string>(todayISODate);

  const [gridShown, setGridShown] = useState(false);
  const toggleGrid = () => setGridShown(!gridShown);

  const selectedCalendar: Calendar = calendars.current[dateLogic.getYear(selectedDate)];
  const selectDate = (date: string) => {
    setSelectedDate(date);
    toggleGrid();
  };
  const selection = { selectedDate, selectDate };

  return (
    <View>
      <CalendarHeader date={selectedDate} onPress={toggleGrid} />

      {gridShown ? (
        <CalendarGrid grid={grid} selection={selection} calendar={calendar} setDate={setDate} />
      ) : (
        <CalendarDay date={selectedDate} calendar={selectedCalendar} />
      )}
    </View>
  );
}
