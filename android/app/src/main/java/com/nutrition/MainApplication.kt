package com.nutrition

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.ReactPackage

class MainApplication : Application(), ReactApplication {

  // 1. ReactHost setup (Modern RN 0.73+)
  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList = PackageList(this).packages // Autolinking yahan se handle hogi
    )
  }

  override fun onCreate() {
    super.onCreate()
    // React Native load karein
    loadReactNative(this)
  }
}
