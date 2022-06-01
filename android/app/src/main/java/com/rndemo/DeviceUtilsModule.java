package com.rndemo;

import static com.facebook.react.bridge.Arguments.createMap;


import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class DeviceUtilsModule extends ReactContextBaseJavaModule {
    private static final String TAG = "DeviceUtilsModule";
    private static ReactApplicationContext reactContext;


    DeviceUtilsModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }



    @Override
    public String getName() {
        return "DeviceUtilsModule";
    }


    @ReactMethod
    public void toTest(Promise p) {
        Activity currentActivity = getCurrentActivity();
        currentActivity.runOnUiThread((
                        new Runnable() {
                            @Override
                            public void run() {
                                currentActivity.getWindow().getDecorView().setSystemUiVisibility(
                                        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN
                                );

                                ActionBar actionBar = currentActivity.getActionBar();
                                if (actionBar != null) {
                                    actionBar.hide();
                                }
                                currentActivity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
                            }
                        })
        );
        p.resolve("test");
    }

    @ReactMethod
    public void toHiden(Promise p) {
        Activity currentActivity = getCurrentActivity();
        currentActivity.runOnUiThread((
                        new Runnable() {
                            @Override
                            public void run() {
                                ActionBar actionBar = currentActivity.getActionBar();
                                if (actionBar != null) {
                                    actionBar.hide();
                                }

                            }
                        })
        );
        p.resolve("hiden");
    }

    @ReactMethod
    public void toShow(Promise p) {
        Activity currentActivity = getCurrentActivity();
        currentActivity.runOnUiThread((
                        new Runnable() {
                            @Override
                            public void run() {
                                currentActivity.getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
                            }
                        })
        );
        p.resolve("show");
    }



    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
    @ReactMethod
    public void addListener(String eventName) {

    }

    @ReactMethod
    public void removeListeners(Integer count) {
        // Remove upstream listeners, stop unnecessary background tasks
    }

    @ReactMethod
    public void hidenBar() {
        //SystemProperties.set("sys.systembar.hide", "1");
        Log.d(TAG, "hidenBar ");
        sendEvent(reactContext,"EventReminder",null);
    }

    @ReactMethod
    public void showBar(Promise p) {
        Log.d(TAG, "showBar: ");
//        SystemProperties.set("sys.systembar.hide", "0");
        p.resolve("显示");
    }


}