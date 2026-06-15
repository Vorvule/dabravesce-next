import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import MenuPanel from '@/applets/panel/menu.panel';
import PageScrollView from '../../components/page/page.scroll.view';

// import mapSources from '../../scripts/source.mapper';
// import createSiteMap from '../../scripts/site.mapper';
// import getAppSourcesSearchable from '../../scripts/app-sources/accents.remover';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();
  // getAppSourcesSearchable();

  const path: string = usePathname();

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <PageScrollView title={Web.getTitle(path)} subtitle="">
        <MenuPanel standalone />
      </PageScrollView>
    </>
  );
}
