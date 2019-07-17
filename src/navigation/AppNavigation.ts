import { createStackNavigator, createAppContainer } from 'react-navigation';
import routes from 'constants/routes';
import MainScreen from 'screens/MainScreen';

const AppNavigation = createStackNavigator(
  {
    [routes.MAIN]: MainScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigation);
