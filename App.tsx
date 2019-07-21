import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Material from 'react-native-vector-icons/MaterialIcons';
import Awesome from 'react-native-vector-icons/FontAwesome';

import AppNavigator from 'navigation/AppNavigator';

import theme from 'constants/theme';

Awesome.loadFont();
Material.loadFont();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
