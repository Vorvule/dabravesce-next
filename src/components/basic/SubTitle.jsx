import { StyleSheet } from "react-native";

import Text from "./Text";

import { DeviceData } from "../../service/DeviceData";

export default function SubTitle({ children }) {
  const styles = StyleSheet.create({
    subtitleStyles: {
      fontSize: DeviceData.fontSize(17),
      fontStyle: "italic",
      textAlign: "center",
    },
  });

  return <Text styling={styles.subtitleStyles}>{children}</Text>;
}
