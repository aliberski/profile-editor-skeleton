import React from 'react';
import { Text, View } from 'react-native';

import ScreenWrapper from 'components/ScreenWrapper';

import { getScreenTitle } from 'helpers/getScreenTitle';
import style from './style';
import { IProps } from './types';

const ProfileScreen = (props: IProps) => {
  return (
    <ScreenWrapper>
      <Text>ProfileScreen</Text>
    </ScreenWrapper>
  );
};

ProfileScreen.navigationOptions = {
  title: getScreenTitle('profile.screenTitle'),
};

export default ProfileScreen;
