import React from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph } from 'react-native-paper';

import ScreenWrapper from 'components/ScreenWrapper';
import Logo from 'components/Logo';

import { COLOR } from 'constants/globalStyle';
import { getScreenTitle } from 'helpers';
import I18n from 'services/i18n';
import routes from 'constants/routes';
import style from './style';
import { IProps } from './types';

const renderButton = (onPress: () => void) => (
  <View style={style.buttonWrapper}>
    <Button mode='contained' loading color={COLOR.facebook} onPress={onPress}>
      {I18n.t('login.buttonText')}
    </Button>
  </View>
);

const LoginScreen = (props: IProps) => {
  const handleLogin = () => {
    props.navigation.navigate(routes.HOME);
  };

  return (
    <ScreenWrapper>
      <Logo />
      <View style={style.content}>
        <Title style={style.text}>{I18n.t('login.title')}</Title>
        <Paragraph style={style.text}>{I18n.t('login.description')}</Paragraph>
      </View>
      {renderButton(handleLogin)}
    </ScreenWrapper>
  );
};

LoginScreen.navigationOptions = {
  title: getScreenTitle('login.screenTitle'),
};

export default LoginScreen;
