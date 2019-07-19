import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import I18n from 'services/i18n';
import { getScreenTitle } from 'helpers';
import style from './style';
import { IProps } from './types';

const LoginScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Button mode='contained'>{I18n.t('login.buttonText')}</Button>
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: getScreenTitle('login.screenTitle'),
};

export default LoginScreen;
