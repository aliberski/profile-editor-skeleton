import React from 'react';
import { Text } from 'react-native';
import I18n from 'services/i18n';

import ScreenWrapper from 'components/ScreenWrapper';

import { getScreenTitle } from 'helpers';
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
  title: getScreenTitle('home.screenTitle'),
};

export default HomeScreen;
