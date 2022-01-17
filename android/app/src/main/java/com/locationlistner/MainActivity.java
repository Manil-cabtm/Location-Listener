package com.locationlistner;

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {
  // For receiving interaction of the notification on your JS Task.
  public  boolean  isOnNewIntent = false;
  //  <[NOTE:- The order of the following files is important.]>
  @Override
  public  void  onNewIntent(Intent  intent) {
      super.onNewIntent(intent);
      isOnNewIntent = true;
      ForegroundEmitter();
  }
  @Override
  protected  void  onStart() {
      super.onStart();
      if(isOnNewIntent == true){}else {
          ForegroundEmitter();
      }
  }
  public  void  ForegroundEmitter(){
    // this method is to send back data from java to javascript so one can easily
    // know which button from notification or the notification button is clicked
    String  main = getIntent().getStringExtra("mainOnPress");
    String  btn = getIntent().getStringExtra("buttonOnPress");
    WritableMap  map = Arguments.createMap();
    if (main != null) {
        map.putString("main", main);
    } 
    if (btn != null) {
        map.putString("button", btn);
    }
    try {
        getReactInstanceManager().getCurrentReactContext()
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit("notificationClickHandle", map);  	
    } catch (Exception  e) {	
    Log.e("SuperLog", "Caught Exception: " + e.getMessage());
    }
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "LocationListner";
  }
}
