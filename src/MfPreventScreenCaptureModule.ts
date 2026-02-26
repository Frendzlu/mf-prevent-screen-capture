import { NativeModule, requireNativeModule } from "expo";

declare class MfPreventScreenCaptureModule extends NativeModule<
  Record<string, never>
> {}

export default requireNativeModule<MfPreventScreenCaptureModule>(
  "MfPreventScreenCapture",
);
