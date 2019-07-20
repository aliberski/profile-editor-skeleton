import React from 'react';
import { StyleSheet, View } from 'react-native';

import SafeView from 'components/SafeView';

import { IProps } from './types';
import style from './style';

const ScreenWrapper = ({ style: propsStyle, children }: IProps) => {
  const wrapperStyle = propsStyle
    ? StyleSheet.flatten([style.container, propsStyle])
    : style.container;
  return (
    <SafeView style={wrapperStyle} forceInset={{ top: 'never' }}>
      {children}
    </SafeView>
  );
};

export default ScreenWrapper;
