import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { COLOR } from 'constants/style';
import { IProps } from './types';
import style, { ICON_SIZE } from './style';

const HamburgerMenu = ({ navigation: { toggleDrawer } }: IProps) => (
  <TouchableOpacity style={style.container} onPress={toggleDrawer}>
    <Icon name='dehaze' size={ICON_SIZE} color={COLOR.font_light} />
  </TouchableOpacity>
);

export default withNavigation(HamburgerMenu);
