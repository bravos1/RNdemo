package com.rndemo;

import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class DeviceUtils extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private static final String TAG = "DeviceUtils";

    static final String HIDE_BAR = "android.intent.action.HIDE_BAR";
    static final String SHOW_BAR = "android.intent.action.SHOW_BAR";

    public DeviceUtils(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "DeviceUtils";
    }

    @ReactMethod
    public void show() {
        Log.d(TAG, "show: ");
    }

    @ReactMethod
    public void hideBar() {
        Intent intent = new Intent();
        intent.setAction(HIDE_BAR);
        reactContext.sendBroadcast(intent);
    }

    @ReactMethod
    public void showBar(Promise p) {
        Intent intent = new Intent();
        intent.setAction(SHOW_BAR);
        reactContext.sendBroadcast(intent);
    }

}