import { createStackNavigator } from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';

import routes from 'constants/routes';
import { standardHeaderOptions } from 'constants/globalStyle';

const MainNavigator = createStackNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.PROFILE]: ProfileScreen,
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
    },
  },
);

export default MainNavigator;