import Text from "./Text";

import { DeviceData } from "../../../library/DeviceData";
import { styles } from "../../../constants/styles";

export default function SubTitle({ children }) {
  const styling = {
    ...styles.basicSubtitle,
    fontSize: DeviceData.fontSize(15, 17)
  }

  return <Text styling={styling}>{children}</Text>;
}
