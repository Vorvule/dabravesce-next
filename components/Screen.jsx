import * as React from "react";
import { ScrollView, View } from "react-native";

import { DeviceData } from "../service/DeviceData";
import { styles } from "../constants/Styles";

export default function Screen({ children }) {
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={DeviceData.deviceIsMobile()}
    >
      <View style={styles.screenContent}>{children}</View>
    </ScrollView>
  );
}
