import { useContext } from 'react';

import { GlobalContext } from '@/contexts/global.context';
import Page from '@/services/page';

export default function useDailyGospelUrl(): string {
  const { dailyKeychain } = useContext(GlobalContext);
  return Page.getUrl(dailyKeychain);
}
