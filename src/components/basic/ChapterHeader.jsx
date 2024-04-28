import { StyleSheet } from "react-native";

import Text from "./Text";

import { DeviceData } from "../../service/DeviceData";

export default function ChapterHeader({ children }) {
  const styles = StyleSheet.create({
    header: {
      fontSize: DeviceData.fontSize(16),
      fontStyle: "italic",
      textAlign: "center",
    },
  });

  return <Text styling={styles.header}>{children}</Text>;
}
