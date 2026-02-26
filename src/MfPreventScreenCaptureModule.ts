import { NativeModule, requireNativeModule } from 'expo';

import { MfPreventScreenCaptureModuleEvents } from './MfPreventScreenCapture.types';

declare class MfPreventScreenCaptureModule extends NativeModule<MfPreventScreenCaptureModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<MfPreventScreenCaptureModule>('MfPreventScreenCapture');
