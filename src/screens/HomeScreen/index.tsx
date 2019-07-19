import React from 'react';
import { Text, View } from 'react-native';

import SafeView from 'components/SafeView';

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
  title: "Home",
};

export default HomeScreen;
