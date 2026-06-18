import { useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import { calendarDates } from '@/applets/calendar/model/calendar.dates';
import { eventDates } from '@/applets/calendar/logic/event.dates';
import ColumnLayout from '../../applets/layout/column.layout';
import CalendarView from '../../applets/calendar/view/calendar.view';
import useDailyGospelUrl from '../../hooks/use.daily.gospel.url';
import { WIDTH_LIMIT } from '../../constants/breakpoints';

export default function CalendarScreen() {
  const path: string = usePathname();

  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  if (width > WIDTH_LIMIT.WIDE_COLUMN) {
    return <Redirect href={dailyGospelUrl} />;
  }

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Праваслаўны каляндар</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <ColumnLayout title="Праваслаўны каляндар" subtitle={dayMonth}>
        <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </ColumnLayout>
    </>
  );
}
