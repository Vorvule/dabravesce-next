import { useContext, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import { GlobalContext } from '@/contexts/global.context';
import { calendarDates } from '@/screens/calendar/model/calendar.dates';
import { eventDates } from '@/screens/calendar/logic/event.dates';
import PageScrollView from '../../components/page/page.scroll.view';
import CalendarView from '../../screens/calendar/view/calendar.view';
import { VERY_WIDE } from '@/constants/breakpoints';
import Page from '../../services/page';

export default function CalendarScreen() {
  const path: string = usePathname();
  const { width } = useWindowDimensions();
  const { dailyKeychain } = useContext(GlobalContext);
  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  if (width > VERY_WIDE) {
    return <Redirect href={Page.getUrl(dailyKeychain)} />;
  }

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
