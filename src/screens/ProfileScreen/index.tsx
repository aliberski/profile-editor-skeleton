// route: PROFILE

import React from 'react';
import { Text, View } from 'react-native';

import ScreenWrapper from 'components/ScreenWrapper';
import BottomNavIcon from 'components/BottomNavIcon';

import routes from 'constants/routes';
import { COLOR } from 'constants/style';
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
  tabBarIcon: <BottomNavIcon route={routes.PROFILE} />,
  tabBarColor: COLOR.profile,
};

export default ProfileScreen;
