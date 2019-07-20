import React from 'react';
import { View, Image } from 'react-native';

import { IProps } from './types';
import style from './style';

const Logo = ({ size }: IProps) => {
  return (
    <View style={style.container}>
      <Image
        source={require('images/logo.png')}
        style={{ width: size, height: size }}
      />
    </View>
  );
};

Logo.defaultProps = {
  size: 150,
};

export default Logo;
