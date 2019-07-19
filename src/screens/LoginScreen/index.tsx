import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const LoginScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
