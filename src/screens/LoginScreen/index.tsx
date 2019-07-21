// route: LOGIN

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

import ScreenWrapper from 'components/ScreenWrapper';
import Logo from 'components/Logo';

import { store } from 'stores';
import { COLOR } from 'constants/style';
import { getScreenTitle, compose } from 'helpers';
import I18n from 'services/i18n';
import routes from 'constants/routes';
import style from './style';
import { IProps } from './types';

const renderButton = (onPress: () => void, loading: boolean) => (
  <View style={style.buttonWrapper}>
    <Button
      mode='contained'
      loading={loading}
      color={COLOR.facebook}
      onPress={onPress}
    >
      {I18n.t('login.buttonText')}
    </Button>
  </View>
);

const LoginScreen = (props: IProps) => {
  const { profileStore } = props;
  const { success, login } = profileStore;
  useEffect(() => {
    if (success) {
      props.navigation.navigate(routes.HOME);
    }
  }, [success]);

  const handleLogin = async () => {
    await login();
  };

  return (
    <ScreenWrapper>
      <Logo />
      <View style={style.content}>
        <Title style={style.text}>{I18n.t('login.title')}</Title>
        <Paragraph style={style.text}>{I18n.t('login.description')}</Paragraph>
      </View>
      {renderButton(handleLogin, profileStore.loading)}
    </ScreenWrapper>
  );
};

LoginScreen.navigationOptions = {
  title: getScreenTitle('login.screenTitle'),
};

export default compose(
  inject(store.profile),
  observer,
)(LoginScreen);
