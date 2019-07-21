import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import AboutScreen from 'screens/AboutScreen';
import HamburgerMenu from 'components/HamburgerMenu';
import Drawer from 'components/Drawer';

import { getCurrentRoute, getScreenTitle } from 'helpers';
import routes from 'constants/routes';
import { standardHeaderOptions, DRAWER_WIDTH, COLOR } from 'constants/style';

const getCurrentScreenTitle = (route: string | null) => {
  switch (route) {
    case routes.HOME:
      return getScreenTitle('home.screenTitle');
    case routes.PROFILE:
      return getScreenTitle('profile.screenTitle');
    case routes.ABOUT:
      return getScreenTitle('about.screenTitle');
    default:
      return '';
  }
};

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.PROFILE]: ProfileScreen,
    [routes.ABOUT]: AboutScreen,
  },
  {
    shifting: true,
    labeled: false,
  },
);

const MainNavigator = createStackNavigator(
  {
    BottomTabNavigator,
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: ({ navigation }) => {
      const currentRoute = getCurrentRoute(navigation.state);
      const title = getCurrentScreenTitle(currentRoute);
      return {
        ...standardHeaderOptions,
        headerRight: <HamburgerMenu />,
        title,
      };
    },
  },
);

export default createDrawerNavigator(
  {
    MainNavigator,
  },
  {
    drawerBackgroundColor: 'transparent',
    drawerWidth: DRAWER_WIDTH,
    drawerPosition: 'right',
    contentComponent: () => <Drawer />,
  },
);
