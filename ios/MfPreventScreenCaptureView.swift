import ExpoModulesCore
import UIKit

class MfPreventScreenCaptureView: ExpoView {
  private static var refCount = 0
  private weak var securedWindow: UIWindow?
  private var isAttached = false

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
  }

  override func didMoveToWindow() {
    super.didMoveToWindow()
    if let window = self.window {
      if !isAttached {
        isAttached = true
        MfPreventScreenCaptureView.refCount += 1
      }
      window.isSecure = true
      securedWindow = window
    } else {
      if isAttached {
        isAttached = false
        MfPreventScreenCaptureView.refCount -= 1
      }
      if MfPreventScreenCaptureView.refCount <= 0 {
        MfPreventScreenCaptureView.refCount = 0
        securedWindow?.isSecure = false
      }
      securedWindow = nil
    }
  }
}
