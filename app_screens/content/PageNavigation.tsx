import { View } from "react-native";
import { router } from "expo-router";

import Content from "@/functions/Content";
import RoundButton from "@/components/RoundButton";
import Styles from "@/constants/Styles";

function PageNavigation({ keychain }: { keychain: number[] }) {
  const backKeychain: number[] = [keychain[0], keychain[1], keychain[2] - 1];
  const backEnabled: boolean = Content.keychainIsValid(backKeychain);
  const back = () => backEnabled && router.push(Content.getUrl(backKeychain));

  const nextKeychain: number[] = [keychain[0], keychain[1], keychain[2] + 1];
  const nextEnabled: boolean = Content.keychainIsValid(nextKeychain);
  const next = () => nextEnabled && router.push(Content.getUrl(nextKeychain));

  return (
    <View style={Styles.buttons}>
      <RoundButton name="arrow-back" onPress={back} enabled={backEnabled} />
      <RoundButton name="arrow-forward" onPress={next} enabled={nextEnabled} />
    </View>
  );
}

export default PageNavigation;
