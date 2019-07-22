import React, { memo } from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

import { IProps } from './types';
import { IChip } from 'stores/HomeStore/types';
import style from './style';

const renderChips = (data: IChip[]) =>
  data.map(({ icon, text }: IChip) => (
    <Chip key={text} icon={icon} style={style.chip}>
      {text}
    </Chip>
  ));

const HomeChips = (props: IProps) => (
  <View style={style.container}>{renderChips(props.data)}</View>
);

export default memo(HomeChips);
