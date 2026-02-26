import { requireNativeView } from 'expo';
import * as React from 'react';

import { MfPreventScreenCaptureViewProps } from './MfPreventScreenCapture.types';

const NativeView: React.ComponentType<MfPreventScreenCaptureViewProps> =
  requireNativeView('MfPreventScreenCapture');

export default function MfPreventScreenCaptureView(props: MfPreventScreenCaptureViewProps) {
  return <NativeView {...props} />;
}
