import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import LocationListener from './src/LocationListener';

const App = () => {
  return (
    <SafeAreaView style= {{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
      <View>
        <Text style= {{
          color: '#040726',
          fontSize: 26,
        }}>Location Listener</Text>
        <LocationListener />
      </View>
    </SafeAreaView>
  );
};

export default App;
