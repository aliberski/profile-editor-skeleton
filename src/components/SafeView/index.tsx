import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { IProps } from './types';

import style from './style';

const SafeView = ({ style: propsStyle, children, forceInset }: IProps) => {
  const viewStyle = propsStyle
    ? StyleSheet.flatten([style.container, propsStyle])
    : style.container;
  return (
    <SafeAreaView style={viewStyle} forceInset={forceInset}>
      {children}
    </SafeAreaView>
  );
};

export default SafeView;
