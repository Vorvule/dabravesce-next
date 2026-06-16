import { useWindowDimensions } from 'react-native';
import { Redirect } from 'expo-router';

import { SCREEN_WIDTH_LIMIT } from '@/constants/breakpoints';
import useDailyGospelUrl from '../../hooks/use.daily.gospel.url';

export default function CalendarScreen() {
  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  const href = width > SCREEN_WIDTH_LIMIT.WIDE ? dailyGospelUrl : '/calendar';

  return <Redirect href={href} />;
}
