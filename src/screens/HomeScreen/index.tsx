import React from 'react';
import { Text } from 'react-native';
import I18n from 'services/i18n';

import SafeView from 'components/SafeView';

import { getScreenTitle } from 'helpers';
import style from './style';
import { IProps } from './types';

const HomeScreen = (props: IProps) => {
  return (
    <SafeView>
      <Text>HomeScreen</Text>
    </SafeView>
  );
};

HomeScreen.navigationOptions = {
  title: getScreenTitle('home.screenTitle'),
};

export default HomeScreen;
