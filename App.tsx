import React from 'react';
import { View } from 'react-native';

import SafeView from 'components/SafeView';

import AppNavigation from 'navigation/AppNavigation';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeView>
        <AppNavigation />
      </SafeView>
    </View>
  );
};

export default App;
