import * as React from "react";

import { MfPreventScreenCaptureViewProps } from "./MfPreventScreenCapture.types";

export default function MfPreventScreenCaptureView({
  children,
  style,
}: MfPreventScreenCaptureViewProps) {
  return <div style={style as React.CSSProperties}>{children}</div>;
}
