import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/functions/Web';
import LeftPanel from '@/app_screens/panel/LeftPanel';
// import mapSources from '@/functions/mapping/SourceMapper';
// import createSiteMap from '@/functions/sitemap/SiteMapper';

export default function IndexScreen() {
  // mapSources();
  // createSiteMap();

  const path: string = usePathname();

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <LeftPanel standalone />
    </>
  );
}
