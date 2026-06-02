import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Device from '@/functions/Device';
import Web from '@/functions/Web';

import CalendarView from '@/app_screens/calendar/view/calendar.view';
import PageScrollView from '../../components/PageScrollView';

export default function CalendarScreen() {
  const path: string = usePathname();

  return (
    <>
      {Device.platformIsWeb() && (
        <Head>
          <title>Дабравесце ~ Праваслаўны каляндар</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title="Дабравесце" subtitle="Праваслаўны каляндар">
        <CalendarView />
      </PageScrollView>
    </>
  );
}
