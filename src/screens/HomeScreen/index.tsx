// route: HOME

import React from 'react';
import { Divider, Title } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

import BottomNavIcon from 'components/BottomNavIcon';
import ScreenWrapper from 'components/ScreenWrapper';
import HomeChips from './HomeChips';
import HomeList from './HomeList';

import { store } from 'stores';
import { compose } from 'helpers';
import I18n from 'services/i18n';
import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import { IProps } from './types';

const HomeScreen = ({ homeStore }: IProps) => {
  const { chips, cards } = homeStore;
  return (
    <ScreenWrapper>
      <Title>{I18n.t('home.title')}</Title>
      <HomeChips data={chips} />
      <Divider />
      <HomeList data={cards} />
    </ScreenWrapper>
  );
};

HomeScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.HOME} />,
  tabBarColor: COLOR.home,
};

export default compose(
  inject(store.home),
  observer,
)(HomeScreen);
