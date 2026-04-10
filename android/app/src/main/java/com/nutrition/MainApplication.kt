package com.Nutrition
import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactInstancePackage
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import java.util.List

class MainApplication : Application(), ReactApplication {
    override val reactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
        override fun getPackages(): List<ReactPackage> = PackageList(this).packages
    }
}
