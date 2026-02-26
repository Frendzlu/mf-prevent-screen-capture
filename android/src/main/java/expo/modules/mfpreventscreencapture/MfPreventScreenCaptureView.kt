package expo.modules.mfpreventscreencapture

import android.app.Activity
import android.content.Context
import android.content.ContextWrapper
import android.view.WindowManager
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

class MfPreventScreenCaptureView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {

  companion object {
    private var refCount = 0
  }

  private fun Context.findActivity(): Activity? {
    var ctx = this
    while (ctx is ContextWrapper) {
      if (ctx is Activity) return ctx
      ctx = ctx.baseContext
    }
    return null
  }

  override fun onAttachedToWindow() {
    super.onAttachedToWindow()
    refCount++
    context.findActivity()?.window?.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
  }

  override fun onDetachedFromWindow() {
    super.onDetachedFromWindow()
    refCount--
    if (refCount <= 0) {
      refCount = 0
      context.findActivity()?.window?.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
    }
  }
}
