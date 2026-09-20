import { Redirect, usePathname } from 'expo-router';

import Web from '@/services/web';
import WebHead from '@/components/web.head';
import MenuView from '@/applets/menu/menu.view';
import ColumnLayout from '../../applets/layout/column.layout';
import useRedirectToPageOnWideScreens from '../../hooks/use.redirect.to.page.on.wide.screens';

// import mapSources from '../../scripts/source.mapper';
// import createSiteMap from '../../scripts/site.mapper';

export default function MenuScreen() {
  // mapSources();
  // createSiteMap();

  const path: string = usePathname();
  const redirectUrl = useRedirectToPageOnWideScreens();

  if (redirectUrl) {
    return <Redirect href={redirectUrl} />;
  }

  return (
    <>
      <WebHead name="Крыніцы" description={Web.getDescription(path)} />

      <ColumnLayout title="Крыніцы" subtitle="">
        <MenuView />
      </ColumnLayout>
    </>
  );
}
