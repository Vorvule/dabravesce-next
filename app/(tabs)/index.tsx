import { Redirect } from 'expo-router';

import useRedirectToPageOnWideScreens from '../../hooks/use.redirect.to.page.on.wide.screens';

export default function CalendarScreen() {
  const redirectUrl = useRedirectToPageOnWideScreens();

  return <Redirect href={redirectUrl ?? '/calendar'} />;
}
