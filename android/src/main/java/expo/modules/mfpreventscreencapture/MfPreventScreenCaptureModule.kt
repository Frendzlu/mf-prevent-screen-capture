package expo.modules.mfpreventscreencapture

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class MfPreventScreenCaptureModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("MfPreventScreenCapture")

    View(MfPreventScreenCaptureView::class) {
    }
  }
}
