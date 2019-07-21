// route: HOME

import React from 'react';
import { Text } from 'react-native';
import I18n from 'services/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomNavIcon from 'components/BottomNavIcon';
import ScreenWrapper from 'components/ScreenWrapper';

import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import style from './style';
import { IProps } from './types';

const HomeScreen = (props: IProps) => {
  return (
    <ScreenWrapper>
      <Text>HomeScreen</Text>
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.HOME} />,
  tabBarColor: COLOR.home,
};

export default HomeScreen;
