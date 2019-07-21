import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as MobxProvider } from 'mobx-react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AppNavigator from 'navigation/AppNavigator';

import stores from 'stores/index';
import theme from 'constants/theme';

MaterialIcons.loadFont();

const App = () => {
  return (
    <MobxProvider {...stores}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </MobxProvider>
  );
};

export default App;
