// route: ABOUT

import React from 'react';
import { View } from 'react-native';
import I18n from 'services/i18n';
import { Title, Paragraph } from 'react-native-paper';

import BottomNavIcon from 'components/BottomNavIcon';
import ScreenWrapper from 'components/ScreenWrapper';
import Logo from 'components/Logo';

import { COLOR } from 'constants/style';
import routes from 'constants/routes';
import style from './style';
import { IProps } from './types';

const AboutScreen = (props: IProps) => {
  return (
    <ScreenWrapper>
      <Logo />
      <View style={style.content}>
        <Title style={style.text}>{I18n.t('about.title')}</Title>
        <Paragraph style={style.text}>{I18n.t('about.description')}</Paragraph>
      </View>
    </ScreenWrapper>
  );
};

AboutScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.ABOUT} />,
  tabBarColor: COLOR.about,
};

export default AboutScreen;
