import { registerWebModule, NativeModule } from "expo";

class MfPreventScreenCaptureModule extends NativeModule<
  Record<string, never>
> {}

export default registerWebModule(
  MfPreventScreenCaptureModule,
  "MfPreventScreenCaptureModule",
);
