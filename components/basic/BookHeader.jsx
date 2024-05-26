import { StyleSheet } from "react-native";

import Text from "./Text";

import { DeviceData } from "../../service/DeviceData";

export default function BookHeader({ children }) {
  const styles = StyleSheet.create({
    header: {
      fontSize: DeviceData.fontSize(17),
      textAlign: "center",
    },
  });

  return <Text styling={styles.header}>{children}</Text>;
}
