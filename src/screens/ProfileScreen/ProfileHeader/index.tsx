import React, { memo } from 'react';
import { View } from 'react-native';
import { Avatar, Title, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import I18n from 'services/i18n';
import { IProps } from './types';
import style, { HEADER_ICON_SIZE, HEADER_COLOR, AVATAR_SIZE } from './style';

const renderFooterItem = (number: number, text: string) => (
  <View style={style.footerItem}>
    <Text style={style.footerText}>{number}</Text>
    <Text style={style.footerText}>{text}</Text>
  </View>
);

const renderIcon = (name: string, onPress: () => void) => (
  <Icon
    name={name}
    size={HEADER_ICON_SIZE}
    color={HEADER_COLOR}
    onPress={onPress}
  />
);

const ProfileHeader = ({ avatar, name, country }: IProps) => {
  const onSettingsPress = () => {
    console.log('Settings');
  };

  const onAlarmsPress = () => {
    console.log('Alarms');
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        {renderIcon('settings', onSettingsPress)}
        {renderIcon('alarm', onAlarmsPress)}
      </View>
      <Avatar.Image source={{ uri: avatar }} size={AVATAR_SIZE} />
      <View style={style.userDetails}>
        <Title style={style.headerText}>{name}</Title>
        <Text style={style.headerText}>{country}</Text>
      </View>
      <View style={style.footer}>
        {renderFooterItem(120, I18n.t('profile.header.followers'))}
        {renderFooterItem(87, I18n.t('profile.header.following'))}
      </View>
    </View>
  );
};

export default memo(ProfileHeader);
