import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { IProps } from './types';
import style from './style';

const HamburgerMenu = ({ navigation: { toggleDrawer } }: IProps) => (
  <TouchableOpacity style={style.container} onPress={toggleDrawer}>
    <View style={style.bar} />
    <View style={style.bar} />
    <View style={style.bar} />
  </TouchableOpacity>
);

export default withNavigation(HamburgerMenu);
