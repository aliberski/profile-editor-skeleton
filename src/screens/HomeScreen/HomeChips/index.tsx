import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

import I18n from 'services/i18n';
import { IChip } from './types';
import style from './style';

const chips: IChip[] = [
  {
    icon: 'details',
    text: I18n.t('home.chips.one'),
  },
  {
    icon: undefined,
    text: I18n.t('home.chips.two'),
  },
  {
    icon: 'directions-car',
    text: I18n.t('home.chips.three'),
  },
  {
    icon: 'directions-run',
    text: I18n.t('home.chips.four'),
  },
  {
    icon: undefined,
    text: I18n.t('home.chips.five'),
  },
  {
    icon: 'flag',
    text: I18n.t('home.chips.six'),
  },
  {
    icon: 'flight',
    text: I18n.t('home.chips.seven'),
  },
];

const renderChips = () =>
  chips.map(({ icon, text }: IChip) => (
    <Chip key={text} icon={icon} style={style.chip}>
      {text}
    </Chip>
  ));

const HomeChips = () => <View style={style.container}>{renderChips()}</View>;

export default HomeChips;
