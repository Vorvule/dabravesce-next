import SubTitle from "./SubTitle";

import { DeviceData } from "../../../library/DeviceData";
import { styles } from "../../../constants/styles";

export default function Title({ children }) {
  const styling = {
    ...styles.basicTitle,
    fontSize: DeviceData.fontSize(16, 18),
  };

  return <SubTitle styling={styling}>{children}</SubTitle>;
}
