package com.rndemo;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity{

  private IntentFilter intentFilter;
  private MyBroadcastReceiver myBroadcastReceiver;

  private static final String TAG = "RNdemo";
  private static final String VOLUME_CHANGE = "android.media.VOLUME_CHANGED_ACTION";

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RNdemo";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    intentFilter = new IntentFilter();
    intentFilter.addAction(VOLUME_CHANGE);
    myBroadcastReceiver = new MyBroadcastReceiver();
    registerReceiver(myBroadcastReceiver, intentFilter);
  }


  @Override
  protected void onDestroy() {
    super.onDestroy();
    unregisterReceiver(myBroadcastReceiver);
  }
}
