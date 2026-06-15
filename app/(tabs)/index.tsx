import { useWindowDimensions } from 'react-native';
import { Redirect } from 'expo-router';

import { VERY_WIDE } from '@/constants/breakpoints';
import useDailyGospelUrl from '../../hooks/use.daily.gospel.url';

export default function CalendarScreen() {
  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  const href = width > VERY_WIDE ? dailyGospelUrl : '/calendar';

  return <Redirect href={href} />;
}
