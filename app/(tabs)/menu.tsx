import { Platform, useWindowDimensions } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/web';
import MenuPanel from '@/applets/panel/menu.panel';
import ThemedView from '@/components/themed/themed.view';

// import mapSources from '../../scripts/source.mapper';
// import createSiteMap from '../../scripts/site.mapper';
// import getAppSourcesSearchable from '../../scripts/app-sources/accents.remover';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();
  // getAppSourcesSearchable();

  const path: string = usePathname();
  const { width } = useWindowDimensions();
  const maxWidth = width > 800 ? 800 : '100%';
  const panelStyle = { flex: 1, width: '100%', maxWidth };

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>{Web.getTitle(path)}</title>
          <meta name="description" content={Web.getDescription(path)} />
        </Head>
      )}

      <ThemedView style={{ flex: 1, alignItems: 'center' }}>
        <ThemedView style={panelStyle}>
          <MenuPanel standalone />
        </ThemedView>
      </ThemedView>
    </>
  );
}
