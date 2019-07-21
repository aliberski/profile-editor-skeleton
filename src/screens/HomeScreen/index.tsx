// route: HOME

import React from 'react';
import { Divider, Title } from 'react-native-paper';

import BottomNavIcon from 'components/BottomNavIcon';
import ScreenWrapper from 'components/ScreenWrapper';
import HomeChips from './HomeChips';
import HomeList from './HomeList';

import I18n from 'services/i18n';
import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import { IProps } from './types';

const HomeScreen = (props: IProps) => {
  return (
    <ScreenWrapper>
      <Title>{I18n.t('home.title')}</Title>
      <HomeChips />
      <Divider />
      <HomeList />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.HOME} />,
  tabBarColor: COLOR.home,
};

export default HomeScreen;
