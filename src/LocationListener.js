import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: 1, // Meters
  desiredAccuracy: {
    ios: 'best',
    android: 'balancedPowerAccuracy',
  },
  // Android only
  androidProvider: 'auto',
  interval: 1000, // Milliseconds
  fastestInterval: 10000, // Milliseconds
  maxWaitTime: 5000, // Milliseconds
  // iOS Only
  activityType: 'other',
  allowsBackgroundLocationUpdates: false,
  headingFilter: 1, // Degrees
  headingOrientation: 'portrait',
  pausesLocationUpdatesAutomatically: false,
  showsBackgroundLocationIndicator: false,
});
let locationSubscription = null;
let locationTimeout = null;

ReactNativeForegroundService.add_task(
  () => {
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'fine',
      },
    }).then((granted) => {
      console.log('Location Permissions: ', granted);
      // if has permissions try to obtain location with RN location
      if (granted) {
        locationSubscription && locationSubscription();
        locationSubscription = RNLocation.subscribeToLocationUpdates(
          ([locations]) => {
            locationSubscription();
            locationTimeout && clearTimeout(locationTimeout);
            console.log(`Location: ${JSON.stringify(locations)}`);
          },
        );
      } else {
        locationSubscription && locationSubscription();
        locationTimeout && clearTimeout(locationTimeout);
        console.log('Location permission not granted.');
      }
    });
  },
  {
    delay: 1000,
    onLoop: true,
    taskId: 'taskid',
    onError: (e) => console.log('Error logging:', e),
  },
);

const Root= () => {
    const [isBackgroundLocationGranted, setIsBackgroundLocationGranted]= useState(false);

    useEffect(() => {      
        const requestBackgroundLocationPermission= async() => {
            //  Checking if the background permissions are granted. 
            const permissionGranted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
                {
                    title: 'Background Location Permission Request.',
                    message:
                        'We need access to your location ' +
                        'so you can get live quality updates.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
    
            if (permissionGranted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log(`Permission Granted: ${permissionGranted}`);
                setIsBackgroundLocationGranted(true);
            }
            else{
                console.log(`Permission Not Granted: ${permissionGranted}`);
                setIsBackgroundLocationGranted(false);
            }
            
        };
        requestBackgroundLocationPermission();
    }, []);

    return(
        <View>
            {
                isBackgroundLocationGranted ? (
                    <Text>Location is being tracked.</Text>
                ):(
                    <Text>Location Permission not granted.</Text>
                )
            }
            
        </View>
    )
}

export default Root;