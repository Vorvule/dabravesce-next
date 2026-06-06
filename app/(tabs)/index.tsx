import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/functions/Web';

import CalendarView from '@/app_screens/calendar/view/calendar.view';
import PageScrollView from '../../components/PageScrollView';
import { Platform } from 'react-native';

export default function CalendarScreen() {
  const path: string = usePathname();

  return (
    <>
      {Platform.OS === 'web' && (
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
