// Reexport the native module. On web, it will be resolved to MfPreventScreenCaptureModule.web.ts
// and on native platforms to MfPreventScreenCaptureModule.ts
export { default } from './MfPreventScreenCaptureModule';
export { default as MfPreventScreenCaptureView } from './MfPreventScreenCaptureView';
export * from  './MfPreventScreenCapture.types';
