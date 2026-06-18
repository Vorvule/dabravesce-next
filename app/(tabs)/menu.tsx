import { Platform, useWindowDimensions } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import MenuView from '@/applets/menu/menu.view';
import ColumnLayout from '../../applets/layout/column.layout';
import { WIDTH_LIMIT } from '../../constants/breakpoints';
import useDailyGospelUrl from '../../hooks/use.daily.gospel.url';

// import mapSources from '../../scripts/source.mapper';
// import createSiteMap from '../../scripts/site.mapper';
// import getAppSourcesSearchable from '../../scripts/app-sources/accents.remover';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();
  // getAppSourcesSearchable();

  const path: string = usePathname();

  const { width } = useWindowDimensions();
  const dailyGospelUrl = useDailyGospelUrl();

  if (width > WIDTH_LIMIT.WIDE_COLUMN) {
    return <Redirect href={dailyGospelUrl} />;
  }

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <ColumnLayout title={Web.getTitle(path)} subtitle="">
        <MenuView />
      </ColumnLayout>
    </>
  );
}
