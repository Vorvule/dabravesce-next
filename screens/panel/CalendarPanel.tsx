import { useState } from 'react';
import { ScrollView } from 'react-native';

import { calendarDates } from '@/screens/calendar/model/calendar.dates';
import { eventDates } from '@/screens/calendar/logic/event.dates';
import CalendarView from '@/screens/calendar/view/calendar.view';
import ThemedView from '@/components/ThemedView';
import PageHeader from '@/components/page/PageHeader';

import { useThemeColor } from '@/hooks/useThemeColor';

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
