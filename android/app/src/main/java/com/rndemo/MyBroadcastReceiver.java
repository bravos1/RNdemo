package com.rndemo;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MyBroadcastReceiver extends BroadcastReceiver {
    private static final String TAG = "MyBroadcastReceiver";
    private static final String VOLUME_CHANGE = "android.media.VOLUME_CHANGED_ACTION";
    private static ReactApplicationContext reactContext;

    @Override
    public void onReceive(Context context, Intent intent) {
        if (VOLUME_CHANGE.equals(intent.getAction()) ){
            Log.d(TAG, "onReceive: VOLUME_CHANGE_ACTION");
            DeviceUtilsModule.sendEvent("EventReminder",null);
        }
    }

}
