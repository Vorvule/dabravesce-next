import { useWindowDimensions } from 'react-native';

import { WIDTH_LIMIT } from '@/constants/breakpoints';
import useDailyGospelUrl from '@/hooks/use.daily.gospel.url';

export default function useRedirectToPageOnWideScreens(): string | null {
  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  if (width > WIDTH_LIMIT.WIDE_COLUMN) {
    return dailyGospelUrl;
  }

  return null;
}
