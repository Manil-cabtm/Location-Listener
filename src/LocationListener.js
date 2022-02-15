import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
      // console.log('Location Permissions: ', granted);
      // if has permissions try to obtain location with RN location
      // if (granted) {
        locationSubscription && locationSubscription();
        locationSubscription = RNLocation.subscribeToLocationUpdates(
          ([locations]) => {
            locationSubscription();
            locationTimeout && clearTimeout(locationTimeout);
            const date=  new Date();
            console.log(`${date} |\tLocation: ${JSON.stringify(locations)}`);
          },
        );
      // } else {
      //   locationSubscription && locationSubscription();
      //   locationTimeout && clearTimeout(locationTimeout);
      //   console.log('Location permission not granted.');
      // }
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
        ReactNativeForegroundService.start({
          id: 144,
          title: 'Foreground Service',
          message: 'Foreground services start.',
        });
        
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

        return () => {
          console.log(`End Frontground Service.`);
          ReactNativeForegroundService.stop();
        };
    }, []);

    return(
        <View style= {{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
          {
            isBackgroundLocationGranted ? (
                <Text>Location is being tracked.</Text>
            ):(
                <Text>Location Permission not granted.</Text>
            )
          }
          <TouchableOpacity
            activeOpacity={.75}
            style= {{
              backgroundColor: '#C29200',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 14,
              width: 200,
              marginTop: 10,
            }}
            onPress={() => {
              console.log(`End LocationListener.`);
              ReactNativeForegroundService.remove_task('taskid',);
            }}
          >
            <Text style= {{color: '#fff'}}>End LocationListener.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={.75}
            style= {{
              backgroundColor: '#C90000',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 14,
              width: 200,
              marginTop: 10,
            }}
            onPress={() => {
              console.log(`End Frontground Service.`);
              ReactNativeForegroundService.stop();
            }}
          >
            <Text style= {{color: '#fff'}}>End Frontground Service.</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Root;