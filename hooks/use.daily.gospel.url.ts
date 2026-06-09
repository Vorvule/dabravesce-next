import { useContext } from 'react';

import { GlobalContext } from '@/contexts/GlobalContext';
import Page from '@/services/Page';

export default function useDailyGospelUrl(): string {
  const { dailyKeychain } = useContext(GlobalContext);
  return Page.getUrl(dailyKeychain);
}
