import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import routes from 'constants/routes';
import LoadingScreen from 'screens/LoadingScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = createSwitchNavigator({
  [routes.LOADING]: LoadingScreen,
  AuthNavigator,
  MainNavigator,
});

export default createAppContainer(AppNavigator);
