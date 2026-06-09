import { useState } from 'react';
import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/functions/Web';
import { calendarDates } from '@/screens/calendar/model/calendar.dates';
import { eventDates } from '@/screens/calendar/logic/event.dates';
import PageScrollView from '../../components/page/PageScrollView';
import CalendarView from '../../screens/calendar/view/calendar.view';

export default function CalendarScreen() {
  const path: string = usePathname();
  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Праваслаўны каляндар</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title="Праваслаўны каляндар" subtitle={dayMonth}>
        <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </PageScrollView>
    </>
  );
}
