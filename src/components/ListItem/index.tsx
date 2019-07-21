import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { IProps } from './types';
import style, { ICON_SIZE, ITEM_COLOR } from './style';

const ListItem = ({ icon, text, number, onPress }: IProps) => {
  const labelStyle = StyleSheet.flatten([style.text, style.label]);

  return (
    <TouchableOpacity style={style.item} onPress={onPress}>
      <Icon name={icon} size={ICON_SIZE} color={ITEM_COLOR} />
      <View style={style.contentWrapper}>
        <View style={style.content}>
          <Text style={labelStyle}>{text}</Text>
          <Text style={style.text}>{number}</Text>
          <Icon name='chevron-right' size={ICON_SIZE} color={ITEM_COLOR} />
        </View>
        <Divider />
      </View>
    </TouchableOpacity>
  );
};

ListItem.defaultProps = {
  onPress: () => {},
};

export default memo(ListItem);
