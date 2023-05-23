import Title from "./Title";

import { DeviceData } from "../../library/DeviceData";

export default function SubTitle({ children }) {
  const styler = { fontSize: DeviceData.fontSize(15, 17) };

  return <Title styler={styler}>{children}</Title>;
}
