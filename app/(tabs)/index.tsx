import { useState } from 'react';
import { Redirect, usePathname } from 'expo-router';

import Web from '@/services/web';
import WebHead from '@/components/web.head';
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
      <WebHead name="Каляндар" description={Web.getDescription(path)} />

      <ColumnLayout title="Праваслаўны каляндар" subtitle={dayMonth}>
        <CalendarView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </ColumnLayout>
    </>
  );
}
