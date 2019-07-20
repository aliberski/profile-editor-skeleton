import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import AboutScreen from 'screens/AboutScreen';
import HamburgerMenu from 'components/HamburgerMenu';
import Drawer from 'components/Drawer';

import routes from 'constants/routes';
import { standardHeaderOptions, DRAWER_WIDTH } from 'constants/style';

const MainNavigator = createStackNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.PROFILE]: ProfileScreen,
    [routes.ABOUT]: AboutScreen,
  },
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
      headerRight: <HamburgerMenu />,
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
