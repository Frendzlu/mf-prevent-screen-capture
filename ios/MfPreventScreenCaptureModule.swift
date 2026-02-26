import ExpoModulesCore

public class MfPreventScreenCaptureModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MfPreventScreenCapture")

    View(MfPreventScreenCaptureView.self) {
    }
  }
}
