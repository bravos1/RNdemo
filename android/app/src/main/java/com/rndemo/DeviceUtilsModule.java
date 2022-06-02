package com.rndemo;

import static com.facebook.react.bridge.Arguments.createMap;


import android.app.ActionBar;
import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
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

import java.io.IOException;


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


    /**
     * brige 层 adb 指令接受
     *
     * @return
     * @param command
     */
    @ReactMethod
    public void RNcommand(String command,Promise p) throws IOException {
        try {
            String res = Shell.sudo(command);
            p.resolve(res);
        }catch (Shell.ShellException e){
            p.reject("0","command faild" +e);
        }
    }

    @ReactMethod
    public static void sendEvent( String eventName, String params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @ReactMethod
    public void hidenBar() {
        //SystemProperties.set("sys.systembar.hide", "1");
        Log.d(TAG, "hidenBar ");
        sendEvent("EventReminder","aaaa");
    }

    @ReactMethod
    public void showBar(Promise p) {
        Log.d(TAG, "showBar: ");
        p.resolve("显示");
    }
}