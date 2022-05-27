package com.rndemo;

import static com.facebook.react.bridge.Arguments.createMap;


import android.app.ActionBar;
import android.app.Activity;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;

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
//                        currentActivity.getWindow().getDecorView().setSystemUiVisibility(
//                                View.SYSTEM_UI_FLAG_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
//                                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                        );

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
//                                currentActivity.getWindow().getDecorView().setSystemUiVisibility(
//                                        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN
//                                );

//                        currentActivity.getWindow().getDecorView().setSystemUiVisibility(
//                                View.SYSTEM_UI_FLAG_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
//                                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
//                                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
//                                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
//                        );

                                ActionBar actionBar = currentActivity.getActionBar();
                                if (actionBar != null) {
                                    actionBar.hide();
                                }
//                                currentActivity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
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
//                                currentActivity.getWindow().setFlags(WindowManager.LayoutParams.FLAGS_CHANGED);
//                                currentActivity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
                            }
                        })
        );
        p.resolve("show");
    }

}