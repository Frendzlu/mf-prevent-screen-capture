import { registerWebModule, NativeModule } from 'expo';

import { MfPreventScreenCaptureModuleEvents } from './MfPreventScreenCapture.types';

class MfPreventScreenCaptureModule extends NativeModule<MfPreventScreenCaptureModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MfPreventScreenCaptureModule, 'MfPreventScreenCaptureModule');
