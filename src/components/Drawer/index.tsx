import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Drawer as PaperDrawer, Button } from 'react-native-paper';
import I18n from 'react-native-i18n';
import { withNavigation, NavigationScreenProp } from 'react-navigation';
import { inject, observer } from 'mobx-react';

import SafeView from 'components/SafeView';

import { store } from 'stores';
import { getCurrentRoute, compose } from 'helpers';
import routes from 'constants/routes';
import { IProps, IDrawerItem } from './types';
import style from './style';

const drawerItems: IDrawerItem[] = [
  {
    label: I18n.t('drawer.home'),
    route: routes.HOME,
  },
  {
    label: I18n.t('drawer.profile'),
    route: routes.PROFILE,
  },
  {
    label: I18n.t('drawer.about'),
    route: routes.ABOUT,
  },
];

const renderDrawerItems = (navigation: NavigationScreenProp<any>) => {
  const { navigate, state } = navigation;
  const currentRoute = getCurrentRoute(state);

  return drawerItems.map(({ label, route }: IDrawerItem) => (
    <PaperDrawer.Item
      key={route}
      label={label}
      active={route === currentRoute}
      onPress={() => navigate(route)}
    />
  ));
};

const renderLogoutButton = (onPress: () => void) => (
  <View style={style.buttonWrapper}>
    <Button mode='contained' onPress={onPress}>
      {I18n.t('drawer.buttonLogout')}
    </Button>
  </View>
);

const Drawer = (props: IProps) => {
  const handleLogout = () => {
    const { profileStore, navigation } = props;
    profileStore.logout();
    navigation.navigate(routes.LOGIN);
  };

  return (
    <SafeView style={style.container}>
      <PaperDrawer.Section>
        {renderDrawerItems(props.navigation)}
      </PaperDrawer.Section>
      {renderLogoutButton(handleLogout)}
    </SafeView>
  );
};

export default compose(
  withNavigation,
  inject(store.profile),
  observer,
)(Drawer);
