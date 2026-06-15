import { useContext, useState } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import { GlobalContext } from '@/contexts/global.context';
import { calendarDates } from '@/applets/calendar/model/calendar.dates';
import { eventDates } from '@/applets/calendar/logic/event.dates';
import PageScrollView from '../../components/page/page.scroll.view';
import CalendarView from '../../applets/calendar/view/calendar.view';
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
  } else {
    return <Redirect href="/calendar" />;
  }
}
