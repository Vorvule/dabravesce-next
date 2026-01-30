import { useContext } from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';
import Page from '@/functions/Page';

export default function useDailyGospelUrl(): string {
  const { dailyKeychain } = useContext(GlobalContext);
  return Page.getUrl(dailyKeychain);
}
