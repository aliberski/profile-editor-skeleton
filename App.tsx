import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppNavigator from 'navigation/AppNavigator';

import theme from 'constants/theme';

Icon.loadFont();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
