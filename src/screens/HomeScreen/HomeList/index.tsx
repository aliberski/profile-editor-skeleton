import React from 'react';
import { FlatList, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import I18n from 'services/i18n/index';
import { ICard, IListItem } from './types';
import style from './style';

const cards: ICard[] = [
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.one.title'),
    subtitle: I18n.t('home.cards.one.subtitle'),
    icon: 'folder',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.two.title'),
    subtitle: I18n.t('home.cards.two.subtitle'),
    icon: 'fingerprint',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.three.title'),
    subtitle: I18n.t('home.cards.three.subtitle'),
    icon: 'flash-on',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.four.title'),
    subtitle: I18n.t('home.cards.four.subtitle'),
    icon: 'flare',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.five.title'),
    subtitle: I18n.t('home.cards.five.subtitle'),
    icon: 'games',
  },
];

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

const HomeList = () => {
  return (
    <View style={style.container}>
      <FlatList
        data={cards}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ title }) => title}
      />
    </View>
  );
};

export default HomeList;
