import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/services/Web';
import Device from '@/services/Device';
import MenuPanel from '@/screens/panel/MenuPanel';
import ThemedView from '@/components/themed/ThemedView';
// import mapSources from '@/services/mapping/SourceMapper';
// import createSiteMap from '@/services/sitemap/SiteMapper';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();

  const path: string = usePathname();
  const windowIsWide = Device.windowIsWide();
  const panelStyle = { flex: 1, width: '100%', maxWidth: windowIsWide ? 800 : '100%' };

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
