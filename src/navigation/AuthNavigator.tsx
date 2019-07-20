import { createStackNavigator } from 'react-navigation';
import LoginScreen from 'screens/LoginScreen';

import { standardHeaderOptions } from 'constants/style';
import routes from 'constants/routes';

export default createStackNavigator(
  {
    [routes.LOGIN]: LoginScreen,
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
    },
  },
);
