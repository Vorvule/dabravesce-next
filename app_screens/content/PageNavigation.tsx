import { StyleSheet } from "react-native";
import { View } from "react-native";

import RoundButton from "@/components/RoundButton";
import Content from "@/functions/Content";
import { useContext } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import { router } from "expo-router";

function PageNavigation() {
  const { keychain, setKeychain } = useContext(GlobalContext);

  const slugchain = Content.getUrl(keychain);
  console.log(slugchain);

  const backKeychain = [keychain[0], keychain[1], keychain[2] - 1];
  const backEnabled = Content.keychainIsValid(backKeychain);
  const goBack = () => backEnabled && router.push(Content.getUrl(backKeychain));

  const nextKeychain = [keychain[0], keychain[1], keychain[2] + 1];
  const nextEnabled = Content.keychainIsValid(nextKeychain);
  const goNext = () => nextEnabled && router.push(Content.getUrl(nextKeychain));

  return (
    <View style={styles.navigation}>
      <RoundButton name="arrow-back" onPress={goBack} enabled={backEnabled} />
      <RoundButton
        name="arrow-forward"
        onPress={goNext}
        enabled={nextEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});

export default PageNavigation;
