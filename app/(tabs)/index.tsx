import { useCallback, useContext, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { router, useFocusEffect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/Web';
import { GlobalContext } from '@/contexts/GlobalContext';
import { calendarDates } from '@/screens/calendar/model/calendar.dates';
import { eventDates } from '@/screens/calendar/logic/event.dates';
import PageScrollView from '../../components/page/PageScrollView';
import CalendarView from '../../screens/calendar/view/calendar.view';
import Page from '../../services/Page';

export default function CalendarScreen() {
  const path: string = usePathname();
  const { width } = useWindowDimensions();
  const { dailyKeychain } = useContext(GlobalContext);
  const [selectedDate, setSelectedDate] = useState<string>(calendarDates.getISODate());
  const dayMonth = eventDates.getSelectedDayAndMonth(selectedDate);

  useFocusEffect(
    useCallback(() => {
      if (width >= 1720) {
        router.replace(Page.getUrl(dailyKeychain));
      }
    }, [width, dailyKeychain]),
  );
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
