import { useWindowDimensions } from 'react-native';
import { Redirect } from 'expo-router';

import { WIDTH_LIMIT } from '@/constants/breakpoints';
import useDailyGospelUrl from '../../hooks/use.daily.gospel.url';

export default function CalendarScreen() {
  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  const href = width > WIDTH_LIMIT.VIEWPORT ? dailyGospelUrl : '/calendar';

  return <Redirect href={href} />;
}
