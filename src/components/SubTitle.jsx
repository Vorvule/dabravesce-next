import Title from "./Title";

import { DeviceSpecific } from "../../library/DeviceSpecific";

export default function SubTitle({ children }) {
  const styler = { fontSize: DeviceSpecific.fontSize(15, 17) };
  
  return <Title styler={styler}>{children}</Title>;
}
