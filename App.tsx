import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AppNavigator from 'navigation/AppNavigator';

import theme from 'constants/theme';

MaterialIcons.loadFont();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
