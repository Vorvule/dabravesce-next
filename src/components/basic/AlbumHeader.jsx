import { StyleSheet } from "react-native";

import Text from "./Text";

import { DeviceData } from "../../service/DeviceData";

export default function AlbumHeader({ children }) {
  const styles = StyleSheet.create({
    header: {
      fontSize: DeviceData.fontSize(18),
      textAlign: "center",
    },
  });

  return <Text styling={styles.header}>{children}</Text>;
}
