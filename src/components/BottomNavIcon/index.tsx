import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import { IProps } from './types';
import { getCurrentRoute } from 'helpers';

const ICON_SIZE = 20;

const BottomNavIcon = ({ route, navigation }: IProps) => {
  const currentRoute = getCurrentRoute(navigation.state);
  const inactiveColor = COLOR.disabled;
  const activeColor = COLOR.font_light;

  const color = currentRoute === route ? activeColor : inactiveColor;

  const renderIcon = (name: string) => (
    <Icon name={name} size={ICON_SIZE} color={color} />
  );

  if (route === routes.HOME) {
    return renderIcon('home');
  }

  if (route === routes.PROFILE) {
    return renderIcon('person');
  }

  if (route === routes.ABOUT) {
    return renderIcon('whatshot');
  }

  return null;
};

export default withNavigation(BottomNavIcon);
