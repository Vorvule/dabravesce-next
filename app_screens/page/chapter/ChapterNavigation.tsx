import { View } from "react-native";
import { router } from "expo-router";

import Page from "@/functions/Page";
import RoundButton from "@/components/RoundButton";
import Styles from "@/constants/Styles";

function ChapterNavigation({ keychain }: { keychain: number[] }) {
  const backKeychain: number[] = [keychain[0], keychain[1], keychain[2] - 1];
  const backEnabled: boolean = Page.keychainValid(backKeychain);
  const back = () => backEnabled && router.push(Page.getUrl(backKeychain));

  const nextKeychain: number[] = [keychain[0], keychain[1], keychain[2] + 1];
  const nextEnabled: boolean = Page.keychainValid(nextKeychain);
  const next = () => nextEnabled && router.push(Page.getUrl(nextKeychain));

  return (
    <View style={Styles.buttons}>
      <RoundButton name="arrow-back" onPress={back} enabled={backEnabled} />
      <RoundButton name="arrow-forward" onPress={next} enabled={nextEnabled} />
    </View>
  );
}

export default ChapterNavigation;
