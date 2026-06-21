import { useState } from 'react';
import { ScrollView } from 'react-native';

import { calendarDates } from '@/applets/calendar/model/calendar.dates';
import { eventDates } from '@/applets/calendar/logic/event.dates';
import CalendarView from '@/applets/calendar/view/calendar.view';
import ThemedView from '@/components/themed/themed.view';
import ColumnHeader from './column.header';

import { useThemeColor } from '@/hooks/use.theme.color';

export default function RightColumn() {
  const borderColor = useThemeColor({}, 'border');

  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  return (
    <ThemedView style={{ flex: 1, borderLeftWidth: 1, borderLeftColor: borderColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ColumnHeader title="Праваслаўны каляндар" subtitle={dayMonth} />

        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </ThemedView>

      </ScrollView>
    </ThemedView>
  );
}
