import * as React from 'react';

import { MfPreventScreenCaptureViewProps } from './MfPreventScreenCapture.types';

export default function MfPreventScreenCaptureView(props: MfPreventScreenCaptureViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
