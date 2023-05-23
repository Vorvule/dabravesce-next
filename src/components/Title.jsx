import Block from "./Block";

import { DeviceData } from "../../library/DeviceData";
import { styles } from "../../constants/styles";

export default function Title({ children, styler }) {
  const style = { fontSize: DeviceData.fontSize(16, 18) };

  return <Block styler={[styles.textTitle, style, styler]}>{children}</Block>;
}
