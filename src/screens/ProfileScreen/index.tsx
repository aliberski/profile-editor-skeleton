import React from 'react';
import { Text, View } from 'react-native';

import { getScreenTitle } from 'helpers/getScreenTitle';
import style from './style';
import { IProps } from './types';

const ProfileScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = {
  title: getScreenTitle('profile.screenTitle'),
};

export default ProfileScreen;
