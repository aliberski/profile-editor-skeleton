import React from 'react';
import { FlatList } from 'react-native';

import ListItem from 'components/ListItem';

import { IListItem, IProps } from './types';

const renderItem = ({ item }: IListItem) => <ListItem {...item} />;

const ProfileList = (props: IProps) => (
  <FlatList
    data={props.data}
    renderItem={renderItem}
    showsVerticalScrollIndicator={false}
    keyExtractor={({ text }) => text}
  />
);

export default ProfileList;
