import React from 'react';
import { FlatList } from 'react-native';

import ListItem from 'components/ListItem';

import I18n from 'services/i18n';
import { IItem, IListItem } from './types';

const items: IItem[] = [
  {
    icon: 'photo-library',
    text: I18n.t('profile.list.shots'),
    number: 35,
  },
  {
    icon: 'favorite',
    text: I18n.t('profile.list.likes'),
    number: 236,
  },
  {
    icon: 'format-color-fill',
    text: I18n.t('profile.list.buckets'),
    number: 26,
  },
  {
    icon: 'local-offer',
    text: I18n.t('profile.list.tags'),
    number: 100,
  },
];

const renderItem = ({ item }: IListItem) => <ListItem {...item} />;

const ProfileList = () => (
  <FlatList
    data={items}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    keyExtractor={({ text }) => text}
  />
);

export default ProfileList;
