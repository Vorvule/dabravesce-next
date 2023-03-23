import * as React from "react";
import { ScrollView, View } from "react-native";

import { DeviceSpecific } from "../../library/DeviceSpecific";
import { styles } from "../../constants/styles";

export default function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={DeviceSpecific.deviceIsMobile()}
    >
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
