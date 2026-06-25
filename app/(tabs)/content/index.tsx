import { Redirect } from 'expo-router';

import useDailyGospelUrl from '../../../hooks/use.daily.gospel.url';

export default function ContentRoot() {
  const dailyGospelUrl = useDailyGospelUrl();
  return <Redirect href={dailyGospelUrl} />;
}
