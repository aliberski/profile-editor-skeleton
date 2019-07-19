import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const ProfileScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
