import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Profile from './src/screens/profile';

const App = () => {
  return (
    <SafeAreaView style= {{
      flex: 1,
      backgroundColor: '#ffffff',
    }}>
      <Profile />
    </SafeAreaView>
  );
};

export default App;
