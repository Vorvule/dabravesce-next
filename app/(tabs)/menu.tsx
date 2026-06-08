import { Platform } from 'react-native';
import { usePathname } from 'expo-router';
import Head from 'expo-router/head';

import Web from '@/functions/Web';
import Device from '@/functions/Device';
import MenuPanel from '@/app_screens/panel/MenuPanel';
import ThemedView from '@/components/ThemedView';
// import mapSources from '@/functions/mapping/SourceMapper';
// import createSiteMap from '@/functions/sitemap/SiteMapper';

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
