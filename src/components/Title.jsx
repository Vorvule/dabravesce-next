import Block from "./Block";

import { DeviceSpecific } from "../../library/DeviceSpecific";
import { styles } from "../../constants/styles";

export default function Title({ children, styler }) {
  return (
    <Block
      styler={[styles.textTitle, DeviceSpecific.sizedFont(16, 18), styler]}
    >
      {children}
    </Block>
  );
}
