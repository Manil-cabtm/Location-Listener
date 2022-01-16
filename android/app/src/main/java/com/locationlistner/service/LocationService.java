//  Creating the service file.

//  Imports.
package com.locationlistener.service;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import javax.annotation.Nullable;

//  Creating the service class.
public class LocationService extends HeadlessJsTaskService {
    @Nullable
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Bundle extras = intent.getExtras();
        return new HeadlessJsTaskConfig(
          "LogLocation", // JS function to call from the service.
          extras != null ? Arguments.fromBundle(extras) : null,
          5000,
          true);
    }
}