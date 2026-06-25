import { useState } from 'react';
import { Platform } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import { calendarDates } from '@/applets/calendar/model/calendar.dates';
import { eventDates } from '@/applets/calendar/logic/event.dates';
import ColumnLayout from '../../applets/layout/column.layout';
import CalendarView from '../../applets/calendar/view/calendar.view';
import useRedirectToPageOnWideScreens from '../../hooks/use.redirect.to.page.on.wide.screens';

export default function CalendarScreen() {
  const path: string = usePathname();

  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  const redirectUrl = useRedirectToPageOnWideScreens();

  if (redirectUrl) {
    return <Redirect href={redirectUrl} />;
  }

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Каляндар</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <ColumnLayout title="Праваслаўны каляндар" subtitle={dayMonth}>
        <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </ColumnLayout>
    </>
  );
}
