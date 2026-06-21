import { Platform } from 'react-native';
import { Redirect, usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import MenuView from '@/applets/menu/menu.view';
import ColumnLayout from '../../applets/layout/column.layout';
import useRedirectToPageOnWideScreens from '../../hooks/use.redirect.to.page.on.wide.screens';

// import mapSources from '../../scripts/source.mapper';
// import createSiteMap from '../../scripts/site.mapper';
// import getAppSourcesSearchable from '../../scripts/app-sources/accents.remover';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();
  // getAppSourcesSearchable();

  const path: string = usePathname();
  const redirectUrl = useRedirectToPageOnWideScreens();

  if (redirectUrl) {
    return <Redirect href={redirectUrl} />;
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
