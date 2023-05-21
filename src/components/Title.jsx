import Block from "./Block";

import { DeviceSpecific } from "../../library/DeviceSpecific";
import { styles } from "../../constants/styles";

export default function Title({ children, styler }) {
  const style = { fontSize: DeviceSpecific.fontSize(16, 18) };
  
  return <Block styler={[styles.textTitle, style, styler]}>{children}</Block>;
}
