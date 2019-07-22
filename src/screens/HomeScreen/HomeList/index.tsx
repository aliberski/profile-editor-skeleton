import React, { memo } from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import { IListItem, IProps } from './types';
import style from './style';

const renderCard = ({ item }: IListItem) => {
  const { uri, title, subtitle, icon } = item;
  return (
    <Card style={style.card}>
      <Card.Cover source={{ uri }} />
      <Card.Title
        title={title}
        subtitle={subtitle}
        left={props => <Avatar.Icon {...props} icon={icon} />}
      />
    </Card>
  );
};

const HomeList = (props: IProps) => {
  return (
    <View style={style.container}>
      <FlatList
        data={props.data}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ title }) => title}
      />
    </View>
  );
};

export default memo(HomeList);
