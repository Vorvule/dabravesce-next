import { StyleSheet } from "react-native";

import Text from "./Text";

import { DeviceData } from "../../service/DeviceData";

export default function Title({ children }) {
  const styles = StyleSheet.create({
    titleText: {
      fontSize: DeviceData.fontSize(17),
      textAlign: "center",
      fontStyle: "italic",
      marginBottom: 12,
    },
  });

  return <Text styling={styles.titleText}>{children}</Text>;
}
