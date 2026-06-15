import { useState } from 'react';
import { ScrollView } from 'react-native';

import { calendarDates } from '@/screens/calendar/model/calendar.dates';
import { eventDates } from '@/screens/calendar/logic/event.dates';
import CalendarView from '@/screens/calendar/view/calendar.view';
import ThemedView from '@/components/themed/themed.view';
import PageHeader from '@/components/page/page.header';

import { useThemeColor } from '@/hooks/use.theme.color';

export default function CalendarPanel() {
  const borderColor = useThemeColor({}, 'border');
  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  return (
    <ThemedView style={{ flex: 1, borderLeftWidth: 1, borderLeftColor: borderColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageHeader title="Праваслаўны каляндар" subtitle={dayMonth} />
        <ThemedView style={{ padding: 18, paddingBottom: 160 }}>
          <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
