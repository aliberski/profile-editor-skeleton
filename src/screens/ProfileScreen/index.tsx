// route: PROFILE

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { inject, observer } from 'mobx-react';

import ScreenWrapper from 'components/ScreenWrapper';
import BottomNavIcon from 'components/BottomNavIcon';
import ProfileHeader from './ProfileHeader/index';
import ProfileList from './ProfileList';

import { compose } from 'helpers';
import { store } from 'stores';
import I18n from 'services/i18n';
import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import style from './style';
import { IProps } from './types';

const renderLogoutButton = (onPress: () => void) => (
  <View style={style.buttonWrapper}>
    <Button mode='contained' onPress={onPress}>
      {I18n.t('profile.buttonLogout')}
    </Button>
  </View>
);

const ProfileScreen = (props: IProps) => {
  const { profileStore } = props;

  const logout = () => {
    profileStore.logout();
    props.navigation.navigate(routes.LOGIN);
  };

  const {
    user: { first_name, last_name, email, picture },
  } = profileStore;

  return (
    <>
      <ProfileHeader
        avatar={picture.data.url}
        title={`${first_name} ${last_name}`}
        subtitle={email}
      />
      <ScreenWrapper>
        <ProfileList />
        {renderLogoutButton(logout)}
      </ScreenWrapper>
    </>
  );
};

ProfileScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.PROFILE} />,
  tabBarColor: COLOR.profile,
};

export default compose(
  inject(store.profile),
  observer,
)(ProfileScreen);
