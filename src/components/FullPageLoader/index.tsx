import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { COLOR } from 'constants/style';
import style from './style';

const FullPageLoader = () => (
  <View style={style.container}>
    <ActivityIndicator animating size='large' color={COLOR.primary} />
  </View>
);

export default FullPageLoader;
