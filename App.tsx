import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from 'navigation/AppNavigator';

import theme from 'constants/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
