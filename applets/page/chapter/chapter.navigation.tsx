import { Link } from 'expo-router';

import Page from '@/services/page';
import RoundButton from '@/components/round.button';
import Styles from '@/constants/styles/common.styles';
import ThemedView from '@/components/themed/themed.view';

function ChapterNavigation({ keychain }: { keychain: number[] }) {
  const backKeychain: number[] = [keychain[0], keychain[1], keychain[2] - 1];
  const backUrl: string | undefined = Page.getUrl(backKeychain);
  const backEnabled: boolean = Page.keychainValid(backKeychain);

  const nextKeychain: number[] = [keychain[0], keychain[1], keychain[2] + 1];
  const nextUrl: string | undefined = Page.getUrl(nextKeychain);
  const nextEnabled: boolean = Page.keychainValid(nextKeychain);

  return (
    <ThemedView style={Styles.buttons}>
      {backEnabled && backUrl ? (
        <Link asChild href={backUrl}>
          <RoundButton name="arrow-back" enabled={backEnabled} />
        </Link>
      ) : (
        <RoundButton name="arrow-back" enabled={backEnabled} />
      )}
      {nextEnabled && nextUrl ? (
        <Link asChild href={nextUrl}>
          <RoundButton name="arrow-forward" enabled={nextEnabled} />
        </Link>
      ) : (
        <RoundButton name="arrow-forward" enabled={nextEnabled} />
      )}
    </ThemedView>
  );
}

export default ChapterNavigation;
