import ExpoModulesCore
import UIKit

class MfPreventScreenCaptureView: ExpoView {
  private static var refCount = 0
  private var isAttached = false
  private var secureField: UITextField?

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
  }

  override func didMoveToWindow() {
    super.didMoveToWindow()
    if self.window != nil {
      if !isAttached {
        isAttached = true
        MfPreventScreenCaptureView.refCount += 1
      }
      enableScreenProtection()
    } else {
      if isAttached {
        isAttached = false
        MfPreventScreenCaptureView.refCount -= 1
      }
      if MfPreventScreenCaptureView.refCount <= 0 {
        MfPreventScreenCaptureView.refCount = 0
        disableScreenProtection()
      }
    }
  }

  private func enableScreenProtection() {
    guard secureField == nil else { return }

    let field = UITextField()
    field.isSecureTextEntry = true
    field.isUserInteractionEnabled = false

    guard let secureLayer = field.layer.sublayers?.first else { return }

    secureLayer.frame = UIScreen.main.bounds
    layer.superlayer?.addSublayer(secureLayer)

    // Move all existing sublayers into the secure layer
    if let sublayers = layer.superlayer?.sublayers {
      for sublayer in sublayers where sublayer != secureLayer {
        secureLayer.addSublayer(sublayer)
      }
    }

    secureField = field
  }

  private func disableScreenProtection() {
    secureField?.isSecureTextEntry = false
    secureField = nil
  }
}
